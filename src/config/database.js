const { Connection, Request } = require('tedious');
require('dotenv').config();

const config = {
  server: process.env.Server,
  database: process.env.Database,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.User, // Your SQL Server username
      password: process.env.Password // Your SQL Server password
    }
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    port: 50021,
    debug: {
      packet: true,
      data: true,
      payload: true
    } // Enable detailed logging
  }
};

let connection;

async function connectToDatabase() {
  try {
    console.log('Creating new connection...');
    connection = new Connection(config);
    
    connection.on('connect', err => {
      if (err) {
        console.error('Error connecting to SQL Server:', err);
      } else {
        console.log('Connected to SQL Server');
      }
    });

    connection.on('error', err => {
      console.error('Connection Error:', err);
    });

    connection.on('end', () => {
      console.log('Connection closed');
    });

    connection.connect(); // Ensure connect is called after setting up events

  } catch (err) {
    console.error('Error connecting to SQL Server:', err);
  }
}

module.exports = {
  connectToDatabase,
  connection
};