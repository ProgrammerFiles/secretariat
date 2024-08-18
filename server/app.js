const { express, helmet, cors } = require("./utils/libs.js");
const { corsConfig } = require("./config");

const startServer = async () => {
    try {

        const app = express();

        app.use(helmet());
        app.use(corsConfig);
        app.post("/checkAuth", (req, res) => {
            console.log("received");
        });


        app.listen(5000, () => {
            console.log("listening at port 5000");
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


startServer();