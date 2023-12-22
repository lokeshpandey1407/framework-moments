# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application source code to the container
COPY . .

# Build your frontend application
RUN npm run build

# Expose a port (if your app listens on a specific port)
EXPOSE 80

# Start the application when the container starts
CMD ["npm", "start"]
