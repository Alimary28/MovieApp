using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MovieApp.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MovieContext(serviceProvider.GetRequiredService<DbContextOptions<MovieContext>>()))
            {
                if (!context.Users.Any())
                {
                    context.Users.Add(new User
                    {
                        FirstName = "First",
                        LastName = "Last",
                        Username = "FirstUser",
                        Password = HashUtils.GetHashString("parolasigura")
                    });
                    context.SaveChanges();
                }

                // Look for any movies.
                if (context.MovieItems.Any())
                {
                    return;   // DB table has been seeded
                }

                context.MovieItems.AddRange(
                    new MovieItem
                    {
                        Title = "When Harry Met Sally",
                        Description = "A romantic and comic movie",
                        Genre = Genre.comedy,
                        Duration = 104,
                        ReleaseYear = 2004,
                        Director = "Sally Joy",
                        AddedDate = DateTime.Now,
                        Rating = 5
                    },

                    new MovieItem
                    {
                        Title = "Ghostbusters ",
                        Description = "A very good movie",
                        Genre = Genre.action,
                        Duration = 98,
                        ReleaseYear = 2006,
                        Director = "Sam Mendez",
                        AddedDate = DateTime.Now,
                        Rating = 7
                    }

                ); ;
                context.SaveChanges();
            }
        }
    }
}

