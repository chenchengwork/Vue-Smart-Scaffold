const path = require("path");
module.exports = {
    resolve: {
        extensions:['.vue','.js','.css','jsx', ".scss"],
        alias: {
            "@": path.resolve(__dirname, 'src/'),
        }
    }
};
