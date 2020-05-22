using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieApp.Models;

namespace MovieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly MovieContext _context;

        public CommentsController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/Comments
        /// <summary>
        /// Gets a list with all the Comments
        /// </summary>
        /// <returns>All the Comment objects</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
        {
            return await _context.Comments.ToListAsync();
        }

        // GET: api/Comments/5
        /// <summary>
        /// Gets a comment based on its id
        /// </summary>
        /// <param name="id">Search the Comments with the given id</param>
        /// <returns>A Comment object</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        /// <response code="404">Returns 404 if the object was not found</response>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public async Task<ActionResult<Comment>> GetComment(long id)
        {
            var comment = await _context.Comments.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }


        //public async Task<ActionResult<IList<string>>> GetComment(long id)
        //{
        //    // var comment = await _context.Comments.FindAsync(id);
        //    var movieComment = await _context.MovieItems.FindAsync(id);
        //    if (movieComment == null)
        //    {
        //        return NotFound();
        //    }
        //    IEnumerable<Comment> Comment = await _context.Comments.ToListAsync();
        //    List<string> Texts = Comment.Where(c => c.MovieItemId == movieComment.Id).Select(c => c.Text).ToList();
        //    return Texts;
        //}

        // PUT: api/Comments/5
        /// <summary>
        /// Updates a comment based on its id
        /// </summary>
        /// <param name="id">The id of the Comment</param>
        /// <param name="comment">The Comment object with all its properties</param>
        /// <returns>A response code</returns>
        /// <response code="204">Returns NoContent if the object was succesfully updated</response>
        /// <response code="400">Returns a Bad Request if the id doesn't match the given id</response>
        /// <response code="404">Returns NotFound if the object id doesn't exist</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutComment(long id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }

            _context.Entry(comment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        // POST: api/Comments
        /// <summary>
        /// Adds a new Comment in the list
        /// </summary>
        /// <param name="comment">The Comment object containing its properties</param>
        /// <returns>The added Comment object</returns>
        /// <response code="201">Returns the newly created item</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<Comment>> PostComment(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetComment), new { id = comment.Id }, comment);
        }

        // DELETE: api/Comments/5
        /// <summary>
        /// Removes a Comment from the list based on its id
        /// </summary>
        /// <param name="id">Search the comment with the given id and removes it</param>
        /// <returns>The removed Comment object</returns>
        /// <response code="404">Returns NotFound if the comment id doesn't exist</response>
        /// <response code="200">Returns Ok and the removed item</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Comment>> DeleteComment(long id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return comment;
        }

        private bool CommentExists(long id)
        {
            return _context.Comments.Any(e => e.Id == id);
        }
    }
}
