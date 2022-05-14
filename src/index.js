import os from "node:os";
import cluster from "node:cluster";

const runPrimaryProcess = () => {
  const processesCount = os.cpus().length;
  console.log(
    `Primary ${process.pid} is running with ${processesCount} processes`
  );

  for (let index = 0; index < processesCount; index++) {
    cluster.fork();
  }

  cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(
        `Worker ${worker.process.pid} crashed. Starting a new one...`
      );
      cluster.fork();
    }
  });
};

const runWorkerProcess = async () => {
  await import("./server.js");
};

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();
