ARG ms

FROM node:18-alpine as builder

ARG ms

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY tsconfig* .
COPY libs libs
COPY nest-cli.json .
COPY apps/${ms} apps/${ms}

RUN yarn build ${ms}

FROM node:18-alpine

WORKDIR /app

ARG ms

COPY --from=builder /app/package.json .
RUN yarn install --production

COPY --from=builder /app/dist/apps/${ms}/main.js main.js

CMD ["node", "main.js"]