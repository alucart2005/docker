# Docker Projects

This repository contains multiple Docker-based projects organized in different branches.

## Main Branch: Docker Web App

A simple web application served by Nginx in a Docker container.

### Project Structure

- `src/`: Contains the HTML source files
- `Dockerfile`: Docker configuration for building the container

### How to Run

1. Build the Docker image:
   ```
   docker build -t webapp .
   ```

2. Run the container:
   ```
   docker run -p 8080:80 webapp
   ```

3. Open your browser and go to `http://localhost:8080`

## Version2 Branch: Node.js CRUD API

A simple CRUD API built with Node.js, Express, and Docker. Includes comprehensive tests.

For detailed information, see the [version2 branch README](https://github.com/alucart2005/docker/tree/version2/crud-app/README.md).

To switch to version2:
```
git checkout version2
```

## Prerequisites

- Docker installed on your system
- Node.js and npm (for local development of CRUD app)