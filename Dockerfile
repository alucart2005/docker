# Use the official nginx image as the base
FROM nginx:alpine

# Copy the HTML file to the nginx default directory
COPY src/index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80