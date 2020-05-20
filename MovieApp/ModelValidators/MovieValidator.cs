using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.ModelValidators
{
    public class MovieValidator : AbstractValidator<MovieItem>
    {
        public MovieValidator() 
        {
            RuleFor(x => x.Rating).InclusiveBetween(1, 10);
            RuleFor(x => x.Duration).GreaterThan(80);
            RuleFor(x => x.Description)
                .NotEmpty()
                .WithMessage("You must offer a description");
            RuleFor(x => x.AddedDate)
                .LessThanOrEqualTo(DateTime.Now)
                .WithMessage($"Date must be less than or equal to {DateTime.Now}");
            //RuleFor(x => x.Comments)
            //    .Must(list => list.Count < 10)
            //    .WithMessage("The number of comments must be less than 10");

        }
    }
}
