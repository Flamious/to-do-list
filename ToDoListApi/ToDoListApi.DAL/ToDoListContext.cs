using Microsoft.EntityFrameworkCore;
using ToDoListApi.DAL.Entities;

namespace ToDoListApi.DAL
{
    public class ToDoListContext : DbContext
    {
        public ToDoListContext(DbContextOptions<ToDoListContext> options) : base(options)
        {
        }

        public virtual DbSet<ToDoString> ToDoString { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<ToDoString>(entity =>
            {
                entity.Property(e => e.IsDeletead).IsRequired();
            });
        }
    }
}
