import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

let myusername = process.env.db_username

console.log("Value: ", myusername);


console.log("Start of Backend Project");
