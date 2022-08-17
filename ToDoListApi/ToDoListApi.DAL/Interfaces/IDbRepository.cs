using System.Threading.Tasks;
using ToDoListApi.DAL.Entities;

namespace ToDoListApi.DAL.Interfaces
{
    public interface IDbRepository
    {
        IRepository<ToDoString> ToDoStrings { get; }

        Task Save();
    }
}
