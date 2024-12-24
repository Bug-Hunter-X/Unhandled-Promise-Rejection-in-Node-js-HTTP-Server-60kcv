const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    // The crucial missing part: send an error response to the client
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that may fail
  // Replace this with your actual asynchronous operation
  const success = Math.random() < 0.5; // Simulate a 50/50 chance of failure
  if (!success) {
    throw new Error('Something went wrong!');
  }
}