using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieItem>>> GetMovieItems()
        {
            return await _context.MovieItems.ToListAsync();
        }

        // GET: api/MovieItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieItem>> GetMovieItem(long id)
        {
            var movieItem = await _context.MovieItems.FindAsync(id);

            if (movieItem == null)
            {
                return NotFound();
            }

            return movieItem;
        }

        // GET: api/MovieItems/2019-03-11T17:31:00/2019-03-12T22:30:00
        [HttpGet("{addedDateFrom}/{addedDateTo}")]
        public async Task<ActionResult<IEnumerable<MovieItem>>> GetMoviesFilteredByDate(DateTime addedDateFrom, DateTime addedDateTo)
        {
             if (addedDateFrom > addedDateTo)
             {
                return NotFound("Start date must be less than end date");
             }
            
            IEnumerable<MovieItem> movieItems = await _context.MovieItems.ToListAsync();
            
            return movieItems.Where(t => t.AddedDate >= addedDateFrom && t.AddedDate <= addedDateTo).OrderByDescending(t => t.ReleaseYear).ToList();
        }

        // PUT: api/MovieItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
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
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MovieItem>> PostMovieItem(MovieItem movieItem)
        {
            if (movieItem.Watched.Equals("yes"))
            {
                movieItem.isWatched = true;
                _context.MovieItems.Add(movieItem);
                await _context.SaveChangesAsync();

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

        // DELETE: api/MovieItems/5
        [HttpDelete("{id}")]
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
