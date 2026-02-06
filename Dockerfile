# ===== Base image =====
FROM node:20-alpine AS base
WORKDIR /app

# ===== Install dependencies =====
COPY package*.json ./
RUN npm install

# ===== Build app =====
COPY . .
RUN npm run build

# ===== Production image =====
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only needed files
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.js ./

EXPOSE 3000

CMD ["npm", "run", "start"]
