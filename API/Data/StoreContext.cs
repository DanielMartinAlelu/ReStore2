using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; } // represent a table in our database
        public DbSet<Basket> Baskets { get; set; } // EF (In the terminal, we migrate the database: 'dotnet ef migrations add BasketEntityAdded')
    }
}
