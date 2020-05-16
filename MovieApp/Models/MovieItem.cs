using System;
using System.ComponentModel.DataAnnotations;
using System.IO;

public enum Genre 
{
	Comedy,
	Adventures,
	Animation,
	Action,
	Drama,
	Thriller,
	Horror,
	Crime

}
public class MovieItem
{
	public long Id { get; set; }
	public string Title { get; set; }
	public string Description { get; set; }
	public string Genre { get; set; }
	public int Duration { get; set; }
	public int ReleaseYear { get; set; }
	public string Director { get; set; }
	public DateTime AddedDate { get; set; }
	[Range(1.0,10.0)]
	public int Rating { get; set; }
	public string Watched { get; set; }

	public bool isWatched;
	
}
