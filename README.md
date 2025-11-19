# Employee Management System

A **Full-Stack Employee Management System** built with **Node.js (Express) + MySQL** for backend and **React** for frontend.  
This project demonstrates **CRUD operations**, API development, database integration, and React UI integration.

---

## 🚀 Features

- Add, edit, delete, and view employees
- Employee fields: **Name, Email, Department, Salary**
- RESTful APIs with proper error handling
- React frontend consuming backend APIs
- Optional enhancements:
  - Search & filter employees
  - Form validation
---

## 📁 Repository Structure

/employee-management-system
│
├── backend/ # Node.js + Express backend
├── frontend/ 
├── employees.sql 
├── README.md 
└── Live url


---

## ⚙️ Backend Setup

1. Navigate to backend folder:
bash

```cd backend```

2.Install dependencies:

```npm install```

3.Create a .env file with your database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db
DB_PORT=3306
PORT=5000

4.Start the backend server:

```npm run dev```

Backend API base URL: ```https://employeemanagementbackend-10ul.onrender.com/api/employees```


## ⚙️ Frontend Setup

1. Navigate to frontend folder:
bash

```cd frontend```

2.Install dependencies:

```npm install```

3.Start the frontend:

```npm start```


📂 SQL Table Structure

employees.sql contains:

CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2)
);


🎥 Live URL

Live URL: https://employee-management-flame-iota.vercel.app/


