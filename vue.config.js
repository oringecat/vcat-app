const { merge } = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  parallel: false,
  //打包取消.map
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "VCAT-APP";
      return args;
    });
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              //配置vant
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true,
              }),
            ],
            compilerOptions: {
              module: "es2015",
            },
          }),
        });
        return options;
      });
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
};
