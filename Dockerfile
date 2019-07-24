FROM node:12.4.0-alpine
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install --pure-lockfile --ignore-scripts
COPY . .  
ENTRYPOINT [ "yarn", "watch" ]
