# Use Node.js LTS version
FROM node:24.11-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency definitions first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build NestJS app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
