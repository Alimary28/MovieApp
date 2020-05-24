using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.Models
{
    public class MovieDto
    {
        public long Id { get; set; }
        public string Title { get; set; }

        //public List<string> Comments { get; set; }
        public int NumberOfComments { get; set; }
    }
}
