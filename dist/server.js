"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:KrkeR7dtZv3l@ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech/neondb?sslmode=require");
let isConnected = false;
//@ts-ignore
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!isConnected) {
        yield pgClient.connect();
        isConnected = true;
        console.log("connected to the server!!!");
    }
    try {
        const { username, password, email } = req.body;
        const insertQuery = `INSERT INTO users (username ,email , password) VALUES ('${email}', '${username}' ,
    '${password}')`;
        const response = yield pgClient.query(insertQuery);
        return res.json({
            message: "You have signed in !!!",
            insertQuery,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "error caught",
            error,
        });
    }
}));
app.listen(3000, () => {
    console.log("server started on Port !!!");
});
