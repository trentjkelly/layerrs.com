# Build stage, use node.js 18 image (bionic) based on Ubuntu
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Smaller image for final stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

#Expose and run the app
EXPOSE 3000
CMD ["node", "build"]
