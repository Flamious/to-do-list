using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListApi.BLL.Interfaces;
using ToDoListApi.DAL.Entities;
using ToDoListApi.DAL.Interfaces;

namespace ToDoListApi.BLL.Services
{
    public class ToDoStringService : IToDoStringService
    {
        private readonly IDbRepository _context;

        public ToDoStringService(IDbRepository repository)
        {
            _context = repository;
        }

        public async Task<ToDoString> AddToDoString(string task)
        {
            var newTask = new ToDoString { Task = task, IsDeleted = false };
            await _context.ToDoStrings.Create(newTask);
            await _context.Save();

            return newTask;
        }

        public async Task CheckToDoString(int id)
        {
            var entity = await _context.ToDoStrings.Get(id);
            if (entity == null)
            {
                return;
            }

            await _context.ToDoStrings.Update(new ToDoString() { Id = id, Task = entity.Task, IsDeleted = !entity.IsDeleted });
            await _context.Save();
        }

        public async Task DeleteString(int id)
        {
            await _context.ToDoStrings.Delete(id);
            await _context.Save();
        }

        public IEnumerable<ToDoString> GetToDoList(bool showHiddenTasks)
        {
            var request = _context.ToDoStrings.GetAll();
            if (!showHiddenTasks)
            {
                request = request.Where(e => !e.IsDeleted);
            }
            return request.ToList();
        }
    }
}
