using AutoMapper;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MovieApp.Helpers;
using MovieApp.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        //Task<User> CreateUser(UserForCreation user);
       // Task<bool> UsernameExists(string username);
    }

    public class UserService : IUserService
    {

        private MovieContext _dbContext;
        private readonly AppSettings _appSettings; 

        public UserService(IOptions<AppSettings> appSettings, MovieContext dbContext)
        {
            _appSettings = appSettings.Value;
            _dbContext = dbContext;  
        }

        public User Authenticate(string username, string password)
        {
            var user = _dbContext.Users.SingleOrDefault(x => x.Username == username && x.Password == HashUtils.GetHashString(password));

            // return null if user not found
            if (user == null) return null;

            // authentication successful so generate jwt token

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token =tokenHandler.WriteToken(token);

            return user;
        }

        //public async Task<User> CreateUser(UserForCreation user)
        //{
        //    var userEntity = _mapper.Map<User>(user);
        //    _dbContext.Users.Add(userEntity);
        //    await _dbContext.SaveChangesAsync();

        //    return userEntity;
        //}

        public IEnumerable<User> GetAll()
        {
            return  _dbContext.Users.ToList();
        }

        //public async Task<bool> UsernameExists(string username)
        //{
        //    return await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == username) != null;
        //}
    }
}
