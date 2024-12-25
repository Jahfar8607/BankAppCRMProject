using System;
using System.ComponentModel.DataAnnotations;

namespace BankApp.API.Models
{
    public class Customer
    {
        [Key] // Marks this property as the primary key
        public int CustomerId { get; set; }

        [Required] // Ensures this field is not null
        [StringLength(255)] // Limits the length of the string to 255 characters
        public string CustomerName { get; set; }

        [Required] // Ensures this field is not null
        public DateOnly DateOfBirth { get; set; }

        [Required] // Ensures this field is not null
        [StringLength(1)] // Limits the string length to allow values like "M" or "F"
        public string Gender { get; set; }
    }
}
