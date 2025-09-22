# Docker Web App

A simple web application served by Nginx in a Docker container.

## Project Structure

- `src/`: Contains the HTML source files
- `Dockerfile`: Docker configuration for building the container

## How to Run

1. Build the Docker image:
   ```
   docker build -t webapp .
   ```

2. Run the container:
   ```
   docker run -p 8080:80 webapp
   ```

3. Open your browser and go to `http://localhost:8080`

## Prerequisites

- Docker installed on your system