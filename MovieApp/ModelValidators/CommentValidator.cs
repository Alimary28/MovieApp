using FluentValidation;
using MovieApp.Models;
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
            RuleFor(x => x.Text).MinimumLength(5).MaximumLength(15);
           
        }
    }
}
