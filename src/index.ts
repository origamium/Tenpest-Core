import newWorkerViaBlob from './helper/newWorkerViaBlob';

const newWorker = function(relativePath: string): Worker {
    try {
        return newWorkerViaBlob(relativePath);
    } catch (e) {
        return new Worker(relativePath);
    }
};
const worker: Worker = newWorker('worker.js');

worker.postMessage(["who", "a!"]);
