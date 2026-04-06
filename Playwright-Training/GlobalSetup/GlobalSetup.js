import dotenv from "dotenv";
import { glob } from "fs";

export default async function globalSetup() {
    console.log("Global setup is running");
    console.log(process.env)
    dotenv.config(
    {
        path:"./.env",
        override:true
    }
  
);
  console.log(process.env);
}
