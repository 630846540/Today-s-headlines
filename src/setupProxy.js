const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api", {
            target: "http://101.200.63.140",
            changeOrigin: true,
            // pathRewrite: {
            //     '^/wxf': ''
            // }
        })
    );
};