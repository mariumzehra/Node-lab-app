# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app code
COPY . .

# The port our app listens on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
