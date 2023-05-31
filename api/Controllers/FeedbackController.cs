using FeedbackSystem.Data;
using FeedbackSystem.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FeedbackSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly FeedBackContext _context;

        public FeedbackController(FeedBackContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFeedback()
        {
            return Ok(await _context.feedBacks.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> CreateFeedback(FeedBack feed)
        {
           _context.feedBacks.Add(feed);    
           await _context.SaveChangesAsync();
            return Ok(feed);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateFeedback(FeedBack feed)
        {
            _context.feedBacks.Update(feed);
            await _context.SaveChangesAsync();
            return Ok(feed);
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteFeedback(int Id)
        {
            var result = await GetFeedbackById(Id);
            if (result == null)
            {
                return NotFound();
            }
            _context.feedBacks.Remove(result);
            return Ok(result);
        }
        [HttpGet("GetById")]
        public async Task<FeedBack> GetFeedbackById(int Id)
        {
            return await _context.feedBacks.FirstOrDefaultAsync(x => x.Id == Id);
        }
    }
}
