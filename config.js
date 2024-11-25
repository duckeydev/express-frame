module.exports = {
  web: {
    port: 3000,
    title: "Meow",
    serveo_enabled: true,
    serveo: {
      subdomain: "igaveittosomeonespecial",
    },
    debug: {
      generateDebug: true,
      presetKey: "debugitdawg" // default is debugitdawg (this is only in use when generateDebug is false)
    },
    errorPage: true, // Custom error page if true
    healthCheck: true,
    session_secret: "Skibidi",
  },
  database: {
    useADatabase: true,
    mongodb: {
      enabled: true,
      uri: "mongodb+srv://duckeydev:duckeydev@cluster0.dzqqtfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
    },

    redis: {
      enabled: false,
      uri: "",
    },

    quickdb: {
      enabled: false,
      storePath: "", // will be inside database/quickdb no matter what
    },

    session: {
      mongodb: {
        enabled: true,
        uri: "mongodb+srv://duckeydev:duckeydev@cluster0.dzqqtfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
      },
      redis: {
        enabled: false,
        uri: "",
        prefix: ":session",
      },
      sqlite3: {
        enabled: false,
      },
    },
  },
};
