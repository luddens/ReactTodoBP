var tryRequire = require("try-require");

var config;

if(process.env.HEROKU === "true" || process.env.AWS ){
    var env = process.env;
    config = {
        AES_PASS: env.AES_PASS,
        AES_SECRET: env.AES_SECRET,
        JWT_SECRET: env.JWT_SECRET,
        COOKIE_SECRET: env.COOKIE_SECRET,
        MONGODB_URI: env.MONGODB_URI,
        curEnv: env.NODE_ENV
    };
} else {
    var url = __dirname + "/localconfig";
    if(tryRequire.resolve(url)){
        config = require(url);
    }

    // console.log(tryRequire.lastError());
}

export {config};