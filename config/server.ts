import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: "0.0.0.0",
  port: 1337,
  url: "http://localhost:1337", // 🔥 hardcode luôn
  app: {
    keys: env.array("APP_KEYS"),
  },
});

export default config;
