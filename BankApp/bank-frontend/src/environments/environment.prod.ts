import { environment } from 'src/environments/environment'; // Correct import path

console.log(environment.apiUrl); // Example usage
// src/environments/environment.prod.ts

export const environment = {
  production: true,
  apiUrl: 'https://api.bankapp.com/api' // Use the production API URL here
};
