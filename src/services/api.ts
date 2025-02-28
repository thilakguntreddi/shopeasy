import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  // In a real application, this would be an actual API endpoint
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Project service
export const projectService = {
  // Get all projects
  getProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },
  
  // Get a single project by ID
  getProjectById: async (id: number) => {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with ID ${id}:`, error);
      throw error;
    }
  }
};

// Contact service
export const contactService = {
  // Send a contact form message
  sendMessage: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await api.post('/contact', data);
      return response.data;
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  }
};

export default api;