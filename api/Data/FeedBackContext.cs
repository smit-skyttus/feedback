using FeedbackSystem.Model;
using Microsoft.EntityFrameworkCore;

namespace FeedbackSystem.Data
{
    public class FeedBackContext:DbContext
    {
        public FeedBackContext(DbContextOptions<FeedBackContext> options):base(options)
        {
            
        }
        public DbSet<FeedBack> feedBacks { get; set; }
    }
}
