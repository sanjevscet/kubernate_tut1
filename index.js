const express =  require('express');
const sum = require('./sum/test')
const os = require('os');
const cluster  =  require('cluster');
const  cpus= os.cpus().length;

const app = express();




if(cluster.isMaster) {
    for(let i = 0; i<cpus; i++) {
        cluster.fork()
    }
} else {

    app.get("/", (_, res) => {
        const ans = sum.sum(4,5);
        const data = {
            ans,
            // date:new Date(),
            pid: process.pid,
            cpus: os.cpus().length,
            p: cluster.worker.process.pid
        };
        console.log(data, "\n")
        res.json({data});
    });
    app.listen("4201", "0.0.0.0", () => {
        console.log("running on port 4201");
    });
}
