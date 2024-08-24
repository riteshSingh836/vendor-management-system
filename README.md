This project is a Vendor Management System built using Node.js. The system manages vendor profiles, tracks purchase orders, and calculates vendor performance metrics such as on-time delivery rate, quality rating, response time, and fulfillment rate.

Project Structure
lua
Copy code
src/
|-- config/
|   |-- db.js              # Database configuration
|
|-- features/
|   |-- order/             # Purchase Order logic
|   |-- performance/       # Vendor Performance logic
|   |-- vendor/            # Vendor Profile logic
|
|-- middlewares/
|   |-- auth.js            # Authentication middleware
|
|-- .env                   # Environment variables
|
|-- index.js               # Entry point for the app
|-- server.js              # Server setup and API endpoint handling
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/vendor-management-system.git
cd vendor-management-system
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following configuration:

makefile
Copy code
PORT=5000
DB_URI=mongodb://localhost:27017/vendor-management
JWT_SECRET=your_jwt_secret
4. Start the Server
bash
Copy code
npm start
This will start the server on the specified port (default: 5000).

5. API Endpoints
Vendor Endpoints
POST /vendors: Create a new vendor
GET /vendors: List all vendors
GET /vendors/
: Retrieve a specific vendor's details
PUT /vendors/
: Update a vendor's details
DELETE /vendors/
: Delete a vendor
Purchase Order Endpoints
POST /purchase-orders: Create a purchase order
GET /purchase-orders: List all purchase orders (filter by vendor is optional)
GET /purchase-orders/
: Retrieve a specific purchase order's details
PUT /purchase-orders/
: Update a purchase order
DELETE /purchase-orders/
: Delete a purchase order
Vendor Performance Endpoints
GET /vendors/
/performance: Retrieve a vendor's performance metrics
6. Running Tests
A test suite is provided to demonstrate the functionality and reliability of the API endpoints.

Running Tests
First, ensure the development environment is set up:

bash
Copy code
npm install
Then, run the tests:

bash
Copy code
npm test
This will execute the test suite, validating the API endpoints.

7. Docker Setup (Optional)
To run the application using Docker:

Build the Docker image:
bash
Copy code
docker build -t vendor-management-system .
Run the Docker container:
bash
Copy code
docker run -p 5000:5000 vendor-management-system
Additional Notes
Database: The application uses MongoDB for storing vendor, purchase order, and performance data.
Authentication: JWT-based authentication is implemented for securing API endpoints.