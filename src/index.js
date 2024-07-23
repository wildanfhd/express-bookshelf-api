const server = require("./server");

// SERVER PORT
const port = process.env.PORT || 9000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
}

startServer();