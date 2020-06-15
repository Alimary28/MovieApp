using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieApp.Migrations
{
    public partial class AddUserAndLinksWithOtherEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_MovieItems_MovieItemId",
                table: "Comments");

            migrationBuilder.AddColumn<long>(
                name: "AddedById",
                table: "MovieItems",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "MovieItemId",
                table: "Comments",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddColumn<long>(
                name: "AddedById",
                table: "Comments",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MovieItems_AddedById",
                table: "MovieItems",
                column: "AddedById");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AddedById",
                table: "Comments",
                column: "AddedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Users_AddedById",
                table: "Comments",
                column: "AddedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_MovieItems_MovieItemId",
                table: "Comments",
                column: "MovieItemId",
                principalTable: "MovieItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieItems_Users_AddedById",
                table: "MovieItems",
                column: "AddedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Users_AddedById",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Comments_MovieItems_MovieItemId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieItems_Users_AddedById",
                table: "MovieItems");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_MovieItems_AddedById",
                table: "MovieItems");

            migrationBuilder.DropIndex(
                name: "IX_Comments_AddedById",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "AddedById",
                table: "MovieItems");

            migrationBuilder.DropColumn(
                name: "AddedById",
                table: "Comments");

            migrationBuilder.AlterColumn<long>(
                name: "MovieItemId",
                table: "Comments",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_MovieItems_MovieItemId",
                table: "Comments",
                column: "MovieItemId",
                principalTable: "MovieItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
