using System;

public class MovieItem
{
	public long Id { get; set; }
	public string Tilte { get; set; }
	public string Description { get; set; }
	public string Genre { get; set; }
	public int Duration { get; set; }
	public int ReleaseYear { get; set; }
	public string Director { get; set; }
	DateTime dateTime { get; set; }
	public int Rating { get; set; }
	public bool Watched { get; set; }
}
