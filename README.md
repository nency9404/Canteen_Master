# Canteen Management System

## 🚀 Project Overview
The **Canteen Management System** is designed to streamline the operations of a canteen. It provides a user-friendly interface for managing orders, inventory, and payments efficiently.

## 🛠️ Features
- **User Authentication**: Login and registration using secure credentials.
- **Order Management**: Place, update, and track orders.
- **Inventory Management**: Track available stock in real-time.
- **Payment Integration**: Supports various payment methods.
- **Admin Dashboard**: Manage products, view sales reports, and analyze data.

## 📦 Tech Stack
- **Frontend**: React.js
- **Backend**: Spring Boot
- **Database**: MySQL
- **API Testing**: Postman
- **Version Control**: Git and GitHub

## 🏗️ Installation
Follow these steps to set up the project locally:

1. **Clone the Repository**
```bash
git clone https://github.com/nency9404/Canteen_Master.git
```

2. **Backend Setup**
```bash
cd Canteen_Master/backend
mvn clean install
mvn spring-boot:run
```

3. **Frontend Setup**
```bash
cd Canteen_Master/frontend
npm install
npm start
```

4. **Database Setup**
- Ensure MySQL is installed and running.
- Create a database named `canteen_management`.
- Update the database connection details in `application.properties`.

## 📄 API Endpoints
| Method   | Endpoint                    | Description              |
|-----------|----------------------------|--------------------------|
| POST      | /api/auth/register         | Register a new user      |
| POST      | /api/auth/login            | User login               |
| GET       | /api/orders                | Get all orders           |
| POST      | /api/orders                | Place a new order        |
| PUT       | /api/orders/{id}           | Update order details     |
| DELETE    | /api/orders/{id}           | Delete an order          |

## 🧑‍💻 Contributors
- **Priyanshi Patel**


---
Feel free to contribute or report issues via [GitHub Issues](https://github.com/nency9404/Canteen_Master/issues).

