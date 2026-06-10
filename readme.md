# School Management System

## Overview

A full-stack Student Management System developed using React and Django REST Framework. The application provides secure authentication and complete student record management through a modern, responsive user interface.

## Features

### Authentication

* JWT-based Login
* Protected Routes
* Token-based API Authentication

### Student Management

* View Students
* Add Student
* Edit Student
* Delete Student
* Search Students

### Validation

* Name validation
* Email validation
* Indian phone number validation
* Grade selection validation
* Address validation

### UI/UX

* Responsive Design
* Modern Dashboard
* Reusable Components
* Loading States
* Mobile-Friendly Layout

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Python
* Django
* Django REST Framework
* Simple JWT

### Database

* SQLite (Development)

---

## API Endpoints

### Authentication

POST /api/login

### Students

GET /api/students

GET /api/students/{id}

POST /api/students

PUT /api/students/{id}

DELETE /api/students/{id}

---

## Project Structure

backend/

* Django Project
* Student APIs
* Authentication
* Database Models

frontend/

* React Application
* Pages
* Components
* Services
* Protected Routes

---

## Installation

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Demo Credentials

Username: admin

Password: admin123

(Replace with your actual demo credentials)

---

## Live Demo

Frontend:
(Add deployed frontend URL)

Backend:
(Add deployed backend URL)

---

## Screenshots

(Add screenshots after deployment)

---

## Author

Adarsh Sreekuttan
