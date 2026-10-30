# Use a lightweight Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy dependency files first for better build caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the production application
RUN npm run build

# Document the port used by the application
EXPOSE 5173

# Start the preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173", "--strictPort"]