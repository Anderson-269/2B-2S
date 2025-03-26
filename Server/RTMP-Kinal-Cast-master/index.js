import NodeMediaServer from "node-media-server";
import configServer  from "./configs/server.js";

const config = configServer;

const nms = new NodeMediaServer(config);
nms.run();
