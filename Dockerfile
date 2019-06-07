FROM 172.0.1.228:5000/node
WORKDIR /mean
COPY . .
EXPOSE 3000
CMD node server.js
