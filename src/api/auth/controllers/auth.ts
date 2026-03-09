import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default {
  async google(ctx) {
    const { idToken } = ctx.request.body;

    if (!idToken) {
      return ctx.badRequest("idToken is missing");
    }

    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload || !payload.email) {
        return ctx.badRequest("Invalid Google payload");
      }

      const {
        sub: googleId,
        email,
        name,
        picture: avatar,
        given_name,
        family_name,
      } = payload;

      // 🔎 1️⃣ Tìm user theo email
      let user = await strapi.query("plugin::users-permissions.user").findOne({
        where: { email },
      });

      // 🆕 2️⃣ Nếu chưa có → tạo user mới
      if (!user) {
        user = await strapi.query("plugin::users-permissions.user").create({
          data: {
            username: email,
            email,
            provider: "google",
            confirmed: true,
            blocked: false,
            firstName: given_name || "",
            lastName: family_name || "",
          },
        });
      }

      // 🔐 3️⃣ Tạo JWT của Strapi
      const jwt = strapi
        .plugin("users-permissions")
        .service("jwt")
        .issue({ id: user.id });

      // 📤 4️⃣ Trả về FE
      ctx.body = {
        jwt,
        user,
      };
    } catch (err) {
      console.error("Google login error:", err);
      return ctx.badRequest("Invalid Google token");
    }
  },
};
