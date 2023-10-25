# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container at /app
COPY package*.json ./

# Install Nuxt.js dependencies in the container
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Run the application when the container launches
CMD [ "npm", "run", "dev" ]