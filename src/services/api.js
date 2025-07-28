// API service for handling HTTP requests
const API_BASE_URL = 'http://localhost:3001/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint);
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // Yield-specific API methods
  async getYields() {
    return this.get('/yields');
  }

  async createYield(yieldData) {
    return this.post('/yields', yieldData);
  }

  async updateYield(id, yieldData) {
    return this.put(`/yields/${id}`, yieldData);
  }

  async deleteYield(id) {
    return this.delete(`/yields/${id}`);
  }

  // Weather API methods
  async getWeatherData() {
    return this.get('/weather/current');
  }

  async getWeatherForecast() {
    return this.get('/weather/forecast');
  }

  // Dashboard API methods
  async getDashboardData() {
    return this.get('/dashboard');
  }

  async getFarmStats() {
    return this.get('/dashboard/stats');
  }
}

export default new ApiService();