﻿using Microsoft.EntityFrameworkCore;

namespace MovieApp.Models
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options)
            : base(options)
        {
        }

        public DbSet<MovieItem> MovieItems { get; set; }
    }
}
