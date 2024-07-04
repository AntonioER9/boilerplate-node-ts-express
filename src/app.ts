import { Server } from "./server";

(() => {
  main();
})();

function main() {
  const server = new Server();
  server.start();
}