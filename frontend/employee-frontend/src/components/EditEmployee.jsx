import React, { useEffect, useState } from 'react';
import { getEmployee, updateEmployee } from '../api/employees';
import EmployeeForm from './EmployeeForm';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditEmployee(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(()=>{
    (async ()=>{
      try {
        const res = await getEmployee(id);
        setInitial(res.data);
      } catch (err) {
        alert('Failed to load');
      }
    })();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await updateEmployee(id, data);
      navigate('/');
    } catch (err) {
      alert('Update failed');
    }
  };

  if (!initial) return <div className="muted" style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>← Back</button>
        </div>
        <h2>Edit Employee</h2>
      </div>

      <div className="card">
        <EmployeeForm initial={initial} onSubmit={onSubmit} submitText="Update Employee" />
      </div>
    </div>
  );
}