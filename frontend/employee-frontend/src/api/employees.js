import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'https://employeemanagementbackend-10ul.onrender.com/api';

export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const getEmployee = id => axios.get(`${API_URL}/employees/${id}`);
export const createEmployee = data => axios.post(`${API_URL}/employees`, data);
export const updateEmployee = (id, data) => axios.put(`${API_URL}/employees/${id}`, data);
export const deleteEmployee = id => axios.delete(`${API_URL}/employees/${id}`);
