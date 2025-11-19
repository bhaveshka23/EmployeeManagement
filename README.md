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
├── frontend/ # React frontend
├── schema.sql # SQL file to create MySQL table
├── README.md # Project documentation
└──Live url # live url

## ⚙️ Backend Setup

1. Navigate to backend folder:
   
```cd backend```

3. Install dependencies:
   
```npm install```

4. Create a .env file with your database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db
DB_PORT=3306
PORT=5000

4. Start the backend server:

```npm run dev```

5. Backend API base URL: ```https://employeemanagementbackend-10ul.onrender.com/api/employees```

## ⚙️ Frontend Setup

1. Navigate to frontend folder:
   
```cd frontend/employee-frontend```

2. Install dependencies:
   
```npm install```

5. Start the frontend:
   
```npm start```

🎥Live URL

Live URL: ```https://employee-management-flame-iota.vercel.app/```

