using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using ToDoListApi.BLL.Interfaces;

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
        public IActionResult GetTasks()
        {
            return Ok(new { ToDoList = _service.GetToDoList() });
        }

        [HttpPost]
        public async Task<IActionResult> AddTask([FromQuery] string task)
        {
            try
            {
                await _service.AddToDoString(task);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
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
