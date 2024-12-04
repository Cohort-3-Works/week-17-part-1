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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const pgClient = new Client(
//   "postgresql://neondb_owner:KrkeR7dtZv3l@ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech/neondb?sslmode=require"
// );
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "KrkeR7dtZv3l",
    port: 5432,
    host: "ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true,
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * FROM users;");
        console.log(response.rows);
    });
}
// main();
// https://zest-knee-b08.notion.site/Hello-bhaiya-new-doubt-below-as-you-told-to-share-all-the-steps-i-did-yesterday-14817f1447c180ac94e9c4654f9fbbba
