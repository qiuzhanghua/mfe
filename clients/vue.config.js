module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      server: "localhost",
      https: true,
      port: 8500,
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/],
  },
  filenameHashing: false,
};
