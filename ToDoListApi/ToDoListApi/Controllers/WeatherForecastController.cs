using Microsoft.AspNetCore.Mvc;

namespace ToDoListApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        [HttpGet]
        public void Get()
        {

        }
    }
}
