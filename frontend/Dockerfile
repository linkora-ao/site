FROM node:22-alpine AS base
WORKDIR /app
RUN npm install -g pnpm@10

# Stage 1: Dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM base AS builder
# ARGS
ARG VITE_API_BASE_URL
ARG VITE_APP_NAME
ARG VITE_APP_DESCRIPTION
ARG VITE_API_TOKEN
ARG VITE_API_TOKEN_FORM_WRITE_ACCESS
# ENV
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL \
    VITE_APP_NAME=$VITE_APP_NAME \
    VITE_APP_DESCRIPTION=$VITE_APP_DESCRIPTION \
    VITE_API_TOKEN=$VITE_API_TOKEN \
    VITE_API_TOKEN_FORM_WRITE_ACCESS=$VITE_API_TOKEN_FORM_WRITE_ACCESS
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Stage 3: Runner
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000
COPY --from=builder --chown=node:node /app/.output ./.output
USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
