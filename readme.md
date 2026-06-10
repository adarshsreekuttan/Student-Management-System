# School Management System – Student Management Module

## Overview

A full-stack Student Management System developed as part of the White Fox Media Python Full Stack Developer Assessment.

The application allows administrators to:

* Login using JWT Authentication
* View Students
* Add Students
* Edit Students
* Delete Students
* Search Students

The project is built using React for the frontend and Django REST Framework for the backend.

---

## Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication (Simple JWT)

### Database

* PostgreSQL

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Features

### Authentication

* JWT Login
* Access Token
* Refresh Token
* Protected Routes

### Student Management

* View Student List
* Add Student
* Edit Student
* Delete Student
* Search Students

### Validation

* Student Name Validation
* Email Validation
* Mobile Number Validation
* Address Validation
* Grade Selection Validation

### Responsive Design

* Mobile Friendly
* Tablet Friendly
* Desktop Friendly

---

## API Endpoints

### Login

POST /api/login/

### Students

GET /api/students/

POST /api/students/

PUT /api/students/{id}/

DELETE /api/students/{id}/

---

## Live Demo

Frontend:

https://student-management-system-nu-two.vercel.app/

Backend:

https://student-management-system-6y87.onrender.com/

---

### Demo Credentials

Username: user1234

Password: myapp123

---

## Setup Instructions

### Clone Repository

git clone https://github.com/adarshsreekuttan/Student-Management-System.git

cd Student-Management-System

---

### Backend Setup

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

---

### Frontend Setup

cd frontend

npm install

npm run dev

---

## Project Structure

Student-Management-System/

├── backend/

│ ├── config/

│ ├── students/

│ ├── manage.py

│ └── requirements.txt

│

├── frontend/

│ ├── src/

│ └── package.json

│

└── README.md

---

## Author

Adarsh Sreekuttan

Python Full Stack Developer
