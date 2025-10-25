# Use official node image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install pnpm global
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy rest of the app
COPY . .

# Build the app
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
