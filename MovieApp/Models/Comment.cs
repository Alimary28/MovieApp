using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public bool Important { get; set; }
        public MovieItem MovieItem { get; set; }
        public long MovieItemId { get; set; }
        public User AddedBy { get; set; }
    }
}
