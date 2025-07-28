// Authentication service
import ApiService from './api';

class AuthService {
  constructor() {
    this.tokenKey = 'authToken';
    this.userKey = 'userData';
  }

  // Login user
  async login(email, password) {
    try {
      const response = await ApiService.post('/auth/login', {
        email,
        password,
      });

      if (response.token) {
        this.setToken(response.token);
        this.setUser(response.user);
        return response;
      }
      
      throw new Error('Invalid credentials');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  // Register user
  async register(userData) {
    try {
      const response = await ApiService.post('/auth/register', userData);
      
      if (response.token) {
        this.setToken(response.token);
        this.setUser(response.user);
        return response;
      }
      
      throw new Error('Registration failed');
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  // Logout user
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    // Optionally call logout endpoint
    // ApiService.post('/auth/logout');
  }

  // Get current user
  getCurrentUser() {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }

  // Get stored token
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  // Set token in localStorage
  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Set user data in localStorage
  setUser(user) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Refresh token
  async refreshToken() {
    try {
      const response = await ApiService.post('/auth/refresh');
      
      if (response.token) {
        this.setToken(response.token);
        return response.token;
      }
      
      throw new Error('Token refresh failed');
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.logout();
      throw error;
    }
  }

  // Reset password
  async resetPassword(email) {
    try {
      return await ApiService.post('/auth/reset-password', { email });
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  }

  // Change password
  async changePassword(oldPassword, newPassword) {
    try {
      return await ApiService.post('/auth/change-password', {
        oldPassword,
        newPassword,
      });
    } catch (error) {
      console.error('Password change failed:', error);
      throw error;
    }
  }

  // Update user profile
  async updateProfile(userData) {
    try {
      const response = await ApiService.put('/auth/profile', userData);
      
      if (response.user) {
        this.setUser(response.user);
      }
      
      return response;
    } catch (error) {
      console.error('Profile update failed:', error);
      throw error;
    }
  }
}

export default new AuthService();