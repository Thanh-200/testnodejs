# Use a lightweight Node.js image
FROM node:20-alpine

WORKDIR /app

# Install dependencies based on lockfile
COPY package*.json ./
RUN npm ci --only=production

# Copy application source
COPY . .

# App listens on 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]

