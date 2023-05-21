import express from 'express'
import cors from 'cors'
import db from "./models/index.js";
import router from "./routes/router.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/items", router);

const PORT = process.env.PORT || 8080;

const startApp = () => {
    db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to the database!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    }).catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
};

startApp();
