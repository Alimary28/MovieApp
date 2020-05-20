using FluentValidation;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using MovieApp.Models;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.ModelValidators
{
    public class CommentValidator : AbstractValidator<Comment>
    {
        public CommentValidator() 
        {
            RuleFor(x => x.Text)
                .MinimumLength(5)
                .MaximumLength(150);
            RuleFor(x => x.MovieItemId)
                .Equal(x => x.MovieItem.Id)
                .WithMessage("The movieId doesn't exist");
        }
    }
}
