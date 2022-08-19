using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDoListApi.DAL.Migrations
{
    public partial class RenameField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "IsDeletead",
                table: "ToDoString",
                newName: "IsDeleted");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "IsDeleted",
                table: "ToDoString",
                newName: "IsDeletead");
        }
    }
}
