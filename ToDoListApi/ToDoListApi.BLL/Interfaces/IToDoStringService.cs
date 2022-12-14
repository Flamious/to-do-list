using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListApi.DAL.Entities;

namespace ToDoListApi.BLL.Interfaces
{
    public interface IToDoStringService
    {
        IEnumerable<ToDoString> GetToDoList(bool showHiddenTasks);

        Task<ToDoString> AddToDoString(string task);

        Task CheckToDoString(int id);

        Task DeleteString(int id);
    }
}
