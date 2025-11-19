***Employee Management System***

A ****Full-Stack Employee Management System*** built with Node.js (Express) + MySQL for the backend and React for the frontend.
This project demonstrates CRUD operations, API development, database integration, and React UI integration.

🚀 Features

Add, edit, delete, and view employees

Employee fields: Name, Email, Department, Salary

RESTful APIs with proper error handling

React frontend consuming backend APIs

Optional enhancements:

Search & filter employees

Form validation

📁 ***Repository Structure***


employee-management-system/
│
├── backend/           # Node.js + Express backend
├── frontend/          # React frontend
├── employees.sql      # SQL script for database & table creation
├── README.md
└── Live URL           # Frontend live deployment link

⚙️ ***Backend Setup***

Navigate to the backend folder:

```cd backend```


Install dependencies:

```npm install```


Create a .env file in the backend folder with your database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db
DB_PORT=3306
PORT=5000


If you are using a hosted MySQL database (like Railway), replace DB_HOST, DB_USER, DB_PASSWORD, and DB_PORT accordingly.

Start the backend server:

```npm run dev```


Backend API Base URL:

```https://employeemanagementbackend-10ul.onrender.com/api/employees```

⚙️ ***Frontend Setup***

Navigate to the frontend folder:

```cd frontend```


Install dependencies:

```npm install```


Start the frontend:

```npm start```


Make sure the .env or configuration in frontend points to the backend API URL.

📂 ***Database Structure***

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

🎥 ***Live URL***

Frontend Live URL:
```https://employee-management-flame-iota.vercel.app/```

Backend Live URL (API):
```https://employeemanagementbackend-10ul.onrender.com/api/employees```

💻 ***Technologies Used***

Backend: Node.js, Express.js, MySQL, dotenv

Frontend: React.js, Axios, Bootstrap/Material-UI (optional)

Deployment: Vercel (Frontend), Render (Backend)
