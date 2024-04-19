import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ e_name: '', salary: '', department: '' });
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      name: formData.e_name,
      salary: formData.salary,
      department: formData.department
    };

    console.log(dataToSend)

    axios.post('http://localhost:4000/employer/employees', { dataToSend })
      .then(() => {
        alert('Account Successfully Created: ');
        setFormData({
          name: '',
          salary: '',
          department: '',
        });
      })
      .catch((error) => {
        alert(error.response.data);
      });

  }

  const fetchEmployees = () => {
    console.log('1');
    axios.get('http://localhost:4000/employer/get_employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
        alert('Error fetching employees. Please try again later.');
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input type="text" name='e_name' value={formData.e_name} onChange={handleChange} />
        </label>
        <label>
          Enter Salary:
          <input type="number" name='salary' value={formData.salary} onChange={handleChange} />
        </label>
        <label>
          Enter Department:
          <input type="text" name='department' value={formData.department} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
      <div>
        <h2>Employees</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              Name: {employee.name}, Salary: {employee.salary}, Department: {employee.department}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
