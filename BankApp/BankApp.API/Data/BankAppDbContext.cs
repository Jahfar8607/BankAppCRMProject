using Microsoft.EntityFrameworkCore;
using BankApp.API.Models;

namespace BankApp.API.Data
{
    public class BankAppDbContext : DbContext
    {
        public BankAppDbContext(DbContextOptions<BankAppDbContext> options) : base(options)
        {
        }

        // Add DbSets for your models
        public DbSet<Customer> Customers { get; set; }        
    }
}
