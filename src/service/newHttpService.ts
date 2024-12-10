// api.js - Utility for handling fetch API requests

// Base URL for the API (could be different for different environments)
const BASE_URL = "https://your-api-endpoint.com";

// Reusable fetch function for making API calls
export const fetchData = async (endpoint, method = 'GET', body = null, headers = {}) => {
  try {
    // Set up the request options
    const options = {
      method, // HTTP method (GET, POST, etc.)
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     ...headers, // Spread any custom headers
    //   },
    };

    // Add body if it's not a GET request
    if (body) {
      options.body = JSON.stringify(body);
    }

    // Make the API call
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    // Check if the response status is OK (2xx)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the response to JSON
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error; // Rethrow error to be handled by the calling function
  }
};
