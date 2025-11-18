import React from 'react';
import { createEmployee } from '../api/employees';
import EmployeeForm from './EmployeeForm';
import { useNavigate } from 'react-router-dom';

export default function AddEmployee(){
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    try {
      await createEmployee(data);
      navigate('/');
    } catch (err) {
      alert('Create failed');
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back</button>
        </div>
        <h2>Add New Employee</h2>
      </div>

      <div className="card">
        <EmployeeForm onSubmit={onSubmit} submitText="Add Employee" />
      </div>
    </div>
  );
}