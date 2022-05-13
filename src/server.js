import http from "http";
const processId = process.pid;

const server = http.createServer((request, response) => {
  for (let index = 0; index < 1e2; index++) {}
  response.end(`Hello World! I'm process ${processId}`);
});

server.listen(3000).once("listening", () => {
  console.log(`Server is listening on process ${processId}`);
});

process.on("SIGTERM", () => {
  console.log(
    `Server is shutting down on process ${processId} ${new Date().toISOString()}`
  );
  server.close(() => process.exit());
});
