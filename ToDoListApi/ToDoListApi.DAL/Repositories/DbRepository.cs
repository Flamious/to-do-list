using System.Threading.Tasks;
using ToDoListApi.DAL.Entities;
using ToDoListApi.DAL.Interfaces;

namespace ToDoListApi.DAL.Repositories
{
    class DbRepository : IDbRepository
    {
        private readonly ToDoListContext _context;
        private IRepository<ToDoString> toDoString;

        public DbRepository(ToDoListContext context)
        {
            _context = context;
        }

        public IRepository<ToDoString> ToDoStrings
        {
            get
            {
                if(toDoString == null)
                {
                    toDoString = new ToDoStringRepository(_context);
                }
                return toDoString;
            }
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
    }
}
