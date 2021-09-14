const { merge } = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
    parallel: false,
    //打包取消.map
    productionSourceMap: false,
    configureWebpack: {
        // 关闭 webpack 的性能提示
        // performance: {
        //   hints:false
        // }

        // //或者

        // 警告 webpack 的性能提示
        performance: {
            hints: 'warning',
            // 入口起点的最大体积
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js')
            }
        }
    },
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
