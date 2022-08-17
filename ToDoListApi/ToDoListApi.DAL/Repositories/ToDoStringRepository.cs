using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListApi.DAL.Entities;
using ToDoListApi.DAL.Interfaces;

namespace ToDoListApi.DAL.Repositories
{
    public class ToDoStringRepository : IRepository<ToDoString>
    {
        private readonly ToDoListContext _context;

        public ToDoStringRepository(ToDoListContext context)
        {
            _context = context;
        }

        public async Task Create(ToDoString item)
        {
            await _context.ToDoString.AddAsync(item);
        }

        public async void Delete(int id)
        {
            var entity = await _context.ToDoString.FindAsync(id);
            if(entity != null)
            {
                _context.Remove(entity);
            }
        }

        public IEnumerable<ToDoString> GetAll()
        {
            return _context.ToDoString;
        }

        public async Task Update(ToDoString item)
        {
            var entity = await _context.ToDoString.FindAsync(item.Id);
            if (entity == null)
            {
                return;
            }

            _context.Entry(entity).CurrentValues.SetValues(item);
        }
    }
}
