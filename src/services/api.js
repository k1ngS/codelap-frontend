import axios from "axios";

const BASE_URL = 'https://dev.codeleap.co.uk/careers/'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

// Interceptors to handle errors globally
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
)

export const postsAPI = {
  getPosts: () => api.get(''),
  createPost: (data) => api.post('', data),
  updatePost: (id, data) => api.patch(`${id}/`, data),
  deletePost: (id) => api.delete(`${id}/`),
}

export default api;