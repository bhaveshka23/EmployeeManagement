import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../api/employees';
import { useNavigate } from 'react-router-dom';

export default function EmployeeList(){
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const navigate = useNavigate();


  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await getEmployees();
      setEmployees(res.data || []);
    } catch (err) {
      setError('Could not fetch employees');
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> { fetchEmployees(); }, []);

  
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this employee?')) return;
    try {
      await deleteEmployee(id);
      setEmployees(e => e.filter(x => x.id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  }

  if (loading) return <p className="muted">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section>
      <div className="page-header">
        <h1>Employees</h1>
        <button className="btn" onClick={() => navigate('/add')}>Add Employee</button>
      </div>

      {/* 🔍 Search Bar */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Search by name, email, or department..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 8, width: 300, borderRadius: 6, border: '1px solid #d1d5db' }}
        />
        <button className="btn" onClick={() => setSearch('')}>Clear</button>
        <div className="muted" style={{ fontSize: 12 }}>{debouncedSearch ? `Filtering: "${debouncedSearch}"` : ''}</div>
      </div>

      <div className="card">
        <table className="employees-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              const list = employees.filter(emp => {
                if (!debouncedSearch) return true;
                const s = debouncedSearch;
                return (
                  String(emp.name || '').toLowerCase().includes(s) ||
                  String(emp.email || '').toLowerCase().includes(s) ||
                  String(emp.department || '').toLowerCase().includes(s)
                );
              });
              if (list.length === 0) {
                return (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: 20 }} className="muted">No employees found</td>
                  </tr>
                );
              }
              return list.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td className="actions">
                    <button className="btn btn-small" onClick={() => navigate(`/edit/${emp.id}`)}>Edit</button>
                    <button className="btn btn-danger btn-small" onClick={() => handleDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              ));
            })()}
          </tbody>
        </table>
      </div>
    </section>
  );
}
