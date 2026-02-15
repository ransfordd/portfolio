# Development: use Node 20 Alpine
FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies (use npm ci when package-lock.json exists)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Expose Next.js dev port
EXPOSE 3000

# Install deps at startup (volume mount overwrites image node_modules) then run dev server
CMD ["sh", "-c", "npm install && npm run dev"]
