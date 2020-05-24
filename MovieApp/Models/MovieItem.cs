using MovieApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;

public enum Genre 
{
	comedy,
	adventure,
	animation,
	action,
	drama,
	thriller,
	horror,
	crime,
	fantasy

}
public class MovieItem
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
	public List<Comment> Comments { get; set; }

	public int NumberOfComments { get; }
}
