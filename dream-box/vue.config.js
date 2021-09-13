const path = require("path");

module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/global.scss";',
      },
    },
  },

  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          "/api/": {
            target: "http://0.0.0.0:3000",
            secure: false,
            changeOrigin: true,
          },
        },
      },
    };
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@c", path.resolve(__dirname, "src/components"))
      .set("@ca", path.resolve(__dirname, "src/components/auth"))
      .set("@s", path.resolve(__dirname, "src/store"))
      .set("@r", path.resolve(__dirname, "src/router"))
      .set("@p", path.resolve(__dirname, "src/views"))
      .set("@api", path.resolve(__dirname, "src/api"))
      .set("@i", path.resolve(__dirname, "src/assets/images"))
      .set("@a", path.resolve(__dirname, "src/assets"))
      .set("@config", path.resolve(__dirname, "src/config"));
  },
};
