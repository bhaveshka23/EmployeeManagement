import React from 'react';

export default function EmployeeForm({ initial, onSubmit, submitText='Save' }) {
  const initialForm = initial ?? { name: '', email: '', department: '', salary: '' };
  const [form, setForm] = React.useState(initialForm);
  React.useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email) {
      alert('Name and email required');
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <label className="form-label">Name</label>
        <input className="form-input" name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <label className="form-label">Email</label>
        <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <label className="form-label">Department</label>
        <input className="form-input" name="department" value={form.department} onChange={handleChange} />
      </div>

      <div className="form-row">
        <label className="form-label">Salary</label>
        <input className="form-input" name="salary" type="number" value={form.salary} onChange={handleChange} />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit">{submitText}</button>
      </div>
    </form>
  );
}
