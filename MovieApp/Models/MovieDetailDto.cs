using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieApp.Models
{
    public class MovieDetailDto
    {
		public long Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public Genre Genre { get; set; }
		public int Duration { get; set; }
		public int ReleaseYear { get; set; }
		public string Director { get; set; }
		public DateTime AddedDate { get; set; }
		public int Rating { get; set; }
		public string Watched { get; set; }

		public bool isWatched;

		public List<string> Comments { get; set; }
	}
}
