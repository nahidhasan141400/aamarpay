const { SimpleNet } = require("../lib/index");

const simpleNet = new SimpleNet();

const server = simpleNet.createServer((socket) => {
  // Handle server logic here
});

// server.listen(3303, () => {
//   console.log("Server is listening on port 3000");
// });

const client = simpleNet.createConnection(3303, "localhost", () => {
  // Handle client connection logic here
});

client.write("nahid");
