# download node image
FROM node:20-alpine

# put node image and create folder as its place
WORKDIR /usr/src/greet

# Please copy files in those folder
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json?? are copied
# where available (npm@5+)
COPY package*.json ./

# run the npm
RUN npm install

# Bundle greet source
COPY . .

# expose to this port
EXPOSE 3001

CMD ["node", "index.js"]