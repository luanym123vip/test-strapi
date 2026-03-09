"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env, }) => ({
    host: "0.0.0.0",
    port: 1337,
    url: "http://localhost:1337", // 🔥 hardcode luôn
    app: {
        keys: env.array("APP_KEYS"),
    },
});
exports.default = config;
