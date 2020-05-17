using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieApp.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MovieItems",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Genre = table.Column<int>(nullable: false),
                    Duration = table.Column<int>(nullable: false),
                    ReleaseYear = table.Column<int>(nullable: false),
                    Director = table.Column<string>(nullable: true),
                    AddedDate = table.Column<DateTime>(nullable: false),
                    Rating = table.Column<int>(nullable: false),
                    Watched = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieItems");
        }
    }
}
