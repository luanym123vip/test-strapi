"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "POST",
            path: "/auth/google",
            handler: "auth.google",
            config: {
                auth: false,
            },
        },
    ],
};
