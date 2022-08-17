using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ToDoListApi.DAL.Entities;
using ToDoListApi.DAL.Interfaces;
using ToDoListApi.DAL.Repositories;

namespace ToDoListApi.DAL
{
    public static class DALServices
    {
        public static IServiceCollection AddDALServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped(typeof(DbContext), typeof(ToDoListContext));
            services.AddScoped(typeof(IRepository<ToDoString>), typeof(ToDoStringRepository));
            services.AddScoped(typeof(IDbRepository), typeof(DbRepository));
            services.AddDbContext<ToDoListContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            return services;
        }
    }
}
