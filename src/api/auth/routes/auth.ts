export default {
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
