# School Management API

A Node.js + Express.js API with MySQL to manage schools.  
It supports adding schools and retrieving a list of schools sorted by proximity to a given latitude/longitude.

---

## 🚀 Features
- Add new schools with name, address, latitude & longitude.
- Fetch all schools sorted by distance from a user-specified location.
- Secure database credentials using environment variables.
- Structured using Express routers and MySQL connection pooling.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Schools-api
npm install
```

### 2. Create .env file

```env
DB_HOST=yourHostName
DB_USER=username
DB_PASSWORD=password
DB_NAME=databaseName
DB_PORT=port
```

### 3. Run the server
```bash
node index.js
```

## API Endpoints
### 1. GET at /listSchools?latitude=xx&longitude=xx

### 2. POST at /addSchool

