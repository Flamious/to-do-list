using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ToDoListApi.BLL.Interfaces;
using ToDoListApi.BLL.Services;
using ToDoListApi.DAL;

namespace ToDoListApi.BLL
{
    public static class BLLServices
    {
        public static IServiceCollection AddBLLServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDALServices(configuration);
            services.AddScoped(typeof(IToDoStringService), typeof(ToDoStringService));

            return services;
        }
    }
}
