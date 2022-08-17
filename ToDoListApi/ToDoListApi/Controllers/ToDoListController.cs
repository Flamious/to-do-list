using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListApi.BLL.Interfaces;
using ToDoListApi.DAL.Entities;

namespace ToDoListApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        private readonly IToDoStringService _service;

        public ToDoListController(IToDoStringService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<ToDoString> GetTasks()
        {
            return _service.GetToDoList();
        }

        [HttpPut]
        public async Task<IActionResult> AddTask([FromQuery] string task)
        {
            try
            {
                await _service.AddToDoString(task);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("{id:int}")]
        public async Task<IActionResult> CheckTask([FromRoute] int id)
        {
            try
            {
                await _service.CheckToDoString(id);
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteTask([FromRoute] int id)
        {
            try
            {
                await _service.DeleteString(id);
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
