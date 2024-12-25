using System.Security.Cryptography;
using System.Text;
namespace BankApp.API.Helpers
{
    public static class JwtHelper
    {
        // Method to generate a secret key
        public static string GenerateSecretKey(int size = 32)
        {
            using (var rng = new RNGCryptoServiceProvider())
            {
                byte[] key = new byte[size];
                rng.GetBytes(key);
                return Convert.ToBase64String(key); // Convert byte array to Base64 string
            }
        }
    }
}
