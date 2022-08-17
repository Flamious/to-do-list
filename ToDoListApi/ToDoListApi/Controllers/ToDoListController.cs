using Microsoft.AspNetCore.Mvc;

namespace ToDoListApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {

        [HttpGet]
        public void Get()
        {

        }
    }
}
