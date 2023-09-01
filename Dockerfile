FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

RUN npm install
# Generate prisma client
RUN npx prisma generate
RUN npx prisma migrate reset --force

EXPOSE 3000

CMD [ "npm", "start" ]
