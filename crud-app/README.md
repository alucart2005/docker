# Simple CRUD App

A simple Node.js CRUD application using Express and Docker for managing items with basic validation.

## Features

- RESTful API for CRUD operations on items
- Input validation for item names
- In-memory data storage
- Docker containerization

## API Endpoints

- `GET /` - Welcome message and API overview
- `GET /items` - Retrieve all items
- `POST /items` - Create a new item
- `PUT /items/:id` - Update an existing item by ID
- `DELETE /items/:id` - Delete an item by ID

### Request/Response Examples

#### Get all items
```bash
curl http://localhost:3000/items
```
Response: `[]` (empty array initially)

#### Create an item
```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Item", "description": "This is a sample"}'
```
Response: `{"message": "Item created successfully", "item": {"id": 1, "name": "Sample Item", "description": "This is a sample"}}`

#### Update an item
```bash
curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Item", "description": "Updated description"}'
```
Response: `{"message": "Item updated successfully", "item": {"id": 1, "name": "Updated Item", "description": "Updated description"}}`

#### Delete an item
```bash
curl -X DELETE http://localhost:3000/items/1
```
Response: `{"message": "Item deleted successfully"}`

## Running with Docker

1. Build the image:
   ```bash
   docker build -t crud-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 crud-app
   ```

3. Access the API at `http://localhost:3000`

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Access the API at `http://localhost:3000`

## Testing

Run the test suite to verify API functionality:

```bash
npm test
```

The tests cover all CRUD operations, input validation, and error handling.

## Project Structure

- `server.js` - Main application file with Express server and routes
- `package.json` - Project dependencies and scripts
- `Dockerfile` - Docker configuration
- `.dockerignore` - Files to exclude from Docker build context
- `.gitignore` - Files to ignore in Git