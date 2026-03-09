"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = [
    {
        name: "strapi::logger",
        config: {
            level: "debug",
        },
    },
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
exports.default = config;
