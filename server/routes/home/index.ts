import { Context } from "koa";
import fs from "fs/promises";
import path from "path";

export default async (ctx: Context) => {
  try {
    let html = await fs.readFile(path.join(process.cwd(), "./routes/home/home.html"), {
      encoding: "utf-8",
    });
    return html;
  } catch (e) {
    console.error(e);
    return "Internal Server Error";
  }
};
