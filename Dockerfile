FROM node
WORKDIR /src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app contents
COPY . .

# Start the app
CMD [ "npm", "start"]