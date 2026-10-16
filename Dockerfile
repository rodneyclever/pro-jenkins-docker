# 1. Use a lightweight Node.js environment instead of Nginx
FROM node:18-alpine

# 2. Create a specific folder inside the container to hold the app
WORKDIR /app

# 3. Copy ONLY the package list first
COPY package.json .

# 4. Tell Docker to download and install all the required packages
RUN npm install

# 5. Copy the actual application code into the container
COPY server.js .

# 6. Document the port the app uses
EXPOSE 3000

# 7. The exact terminal command to boot the app when the container starts
CMD ["node", "server.js"]