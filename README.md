# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications where asynchronous operations within an HTTP server fail to properly handle rejections, leading to silent failures and unresponsive servers. The provided example showcases the issue and its solution.

## Bug
The `bug.js` file contains a Node.js HTTP server that simulates an asynchronous operation that may throw an error. However, it fails to catch and respond to this error appropriately, resulting in an unresponsive server when the asynchronous operation fails. The error is logged to the console, but the client receives no error response.

## Solution
The `bugSolution.js` file presents a corrected version of the server. It properly handles the rejection of the Promise, sending an appropriate error response to the client (500 status code) in case of a failure. This ensures that clients are informed of server-side errors, preventing confusion and promoting robust error handling.

## How to Run
1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to execute the buggy server.
4. Run `node bugSolution.js` to execute the corrected server.

## Lesson Learned
Always ensure that Promises within asynchronous operations are handled properly with `.catch()` to handle possible rejections and send appropriate responses to clients in case of errors.