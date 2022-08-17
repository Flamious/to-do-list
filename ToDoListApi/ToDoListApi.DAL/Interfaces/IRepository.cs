using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListApi.DAL.Entities;

namespace ToDoListApi.DAL.Interfaces
{
    public interface IRepository<T>
        where T : class
    {
        IEnumerable<T> GetAll();

        Task Create(T item);

        Task Update(T item);

        void Delete(int id);
    }
}
