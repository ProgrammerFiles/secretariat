const { cors } = require("../../utils/libs");
const corsOrigin = require("./corsOrigin.js");

const corsConfig = cors({
    origin: corsOrigin.SP_TOLEDO,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
});

module.exports = corsConfig;