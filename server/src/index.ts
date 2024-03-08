import express from "express"
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.SERVER_PORT || 3000;


const app = express();
app.use(express.json());


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}`);
        }); 
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

start()