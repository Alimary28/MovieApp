using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Description;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MovieApp.Models;
using OfficeOpenXml.ConditionalFormatting;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace MovieApp.Controllers
{
    [Route("api/MovieItems")]
    [ApiController]
    public class MovieItemsController : ControllerBase
    {
        private readonly MovieContext _context;

        public MovieItemsController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/MovieItems
        /// <summary>
        /// Gets a list of all movies
        /// </summary>
        /// <returns>A list of MovieDto objects</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IQueryable<MovieDto> GetMovieItems()
        {
            var movies = from m in _context.MovieItems
                         select new MovieDto()
                         {
                             Id = m.Id,
                             Title = m.Title,
                             NumberOfComments = m.Comments.Where(c => c.MovieItemId == m.Id).Count()
                         };

            return movies;
        }

        // GET: api/MovieItems/5
        /// <summary>
        /// Gets the movie object details with the given id containing the list of comments
        /// </summary>
        /// <param name="id">Search the movie with the given id</param>
        /// <returns>Returns a movie details object of type MovieDetailDto</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        /// <response code="404">Returns Not Found if the object is null</response>
        [HttpGet("{id}")]
        [ResponseType(typeof(MovieDetailDto))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public async Task<ActionResult<MovieDetailDto>> GetMovieItem(long id)
        {
            var movieItem = await _context.MovieItems.Select(m =>
            new MovieDetailDto()
            {
                Id = m.Id,
                Title = m.Title,
                Description = m.Description,
                Genre = m.Genre,
                Duration = m.Duration,
                ReleaseYear = m.ReleaseYear,
                Director = m.Director,
                AddedDate = m.AddedDate,
                Rating = m.Rating,
                Watched = m.Watched,
                Comments = m.Comments.Select(c => c.Text).ToList()

            }).SingleOrDefaultAsync(m => m.Id == id);

            if (movieItem == null)
            {
                return NotFound();
            }

            return Ok(movieItem);
        }

        // GET: api/MovieItems/2019-03-11T17:31:00/2019-03-12T22:30:00
        /// <summary>
        /// Gets a list of Movies between two dates
        /// </summary>
        /// <param name="addedDateFrom">Filters movies from this date time (inclusive)</param>
        /// <param name="addedDateTo">Filters movies up to this date time (inclusive)</param>
        /// <returns>A list of Movie objects</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        /// <response code="404">Returns NotFound if date from is greater than date to</response>
        [HttpGet("{addedDateFrom}/{addedDateTo}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IEnumerable<MovieItem>>> GetMoviesFilteredByDate(DateTime addedDateFrom, DateTime addedDateTo)
        {
             if (addedDateFrom > addedDateTo)
             {
                return NotFound("Start date must be less than end date");
             }
            
            IEnumerable<MovieItem> movieItems = await _context.MovieItems.ToListAsync();
            
            return movieItems.Where(t => t.AddedDate >= addedDateFrom && t.AddedDate <= addedDateTo)
                .OrderByDescending(t => t.ReleaseYear).ToList();
        }

        // PUT: api/MovieItems/5
        /// <summary>
        /// Updates a Movie object based on its id
        /// </summary>
        /// <param name="id">Search a movie with the given id</param>
        /// <param name="movieItem">The movie object containing all its properties</param>
        /// <returns>A response code</returns>
        /// <response code="204">Returns NoContent if the Movie object was succesfully updated</response>
        /// <response code="400">Returns a Bad Request if the id doesn't match the Movie id</response>
        /// <response code="404">Returns NotFound if the Movie id doesn't exist</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutMovieItem(long id, MovieItem movieItem)
        {
            if (id != movieItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(movieItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovieItems
        /// <summary>
        /// Adds a new Movie object in the list 
        /// </summary>
        /// <param name="movieItem">The Movie object with all its properties</param>
        /// <returns>The added Movie object</returns>
        /// <response code="201">Returns the newly created item</response>
        /// <response code="400">Returns a Bad Request if the Watched string doesn't match yes or no</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<MovieItem>> PostMovieItem(MovieItem movieItem)
        {
            if (movieItem.Watched.Equals("yes"))
            {
                movieItem.isWatched = true;
                _context.MovieItems.Add(movieItem);
                await _context.SaveChangesAsync();

                //_context.Entry(movieItem).Reference(x => x.Comments).Load();
                //var dto = new MovieDetailDto()
                //{
                //    Id = movieItem.Id,
                //    Title = movieItem.Title,
                //    Description = movieItem.Description,
                //    Genre = movieItem.Genre,
                //    Duration = movieItem.Duration,
                //    ReleaseYear = movieItem.ReleaseYear,
                //    Director = movieItem.Director,
                //    AddedDate = movieItem.AddedDate,
                //    Rating = movieItem.Rating,
                //    Watched = movieItem.Watched,
                //    Comments = movieItem.Comments.Select(c => c.Text).ToList()
                //};

                return CreatedAtAction(nameof(GetMovieItem), new { id = movieItem.Id }, movieItem);
            }
            else if (movieItem.Watched.Equals("no"))
            {
                movieItem.isWatched = false;
                _context.MovieItems.Add(movieItem);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetMovieItem), new { id = movieItem.Id }, movieItem);
            }
            else
            {
                return BadRequest("Value of watched must be yes or no");  
            }
            
        }

        // POST: api/MovieItem/1/Comment
        /// <summary>
        /// Search a movie with the given id and adds a new comment for that movie
        /// </summary>
        /// <param name="id">Search the movie with the given id</param>
        /// <param name="comment">Adds a new comment for that movie</param>
        /// <returns>OK response if the request was succesfully completed</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{id}/Comment")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Comment>> PostComment(long id, Comment comment)
        {
            var movieItem = await _context.MovieItems.FindAsync(id);
            comment.MovieItemId = movieItem.Id;
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            movieItem.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return Ok();
        }

        // DELETE: api/MovieItems/5
        /// <summary>
        /// Removes a Movie from the list based on the given id
        /// </summary>
        /// <param name="id">Search for the Movie with the given id</param>
        /// <returns>The removed Movie object</returns>
        /// <response code="404">Returns NotFound if the Movie id doesn't exist</response>
        /// <response code="200">Returns 200 and the removed item</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<MovieItem>> DeleteMovieItem(long id)
        {
            var movieItem = await _context.MovieItems.FindAsync(id);
            if (movieItem == null)
            {
                return NotFound();
            }

            _context.MovieItems.Remove(movieItem);
            await _context.SaveChangesAsync();

            return movieItem;
        }

        private bool MovieItemExists(long id)
        {
            return _context.MovieItems.Any(e => e.Id == id);
        }
    }
}
