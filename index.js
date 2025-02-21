import http from "https";
import fs from "fs";
import chalk from "chalk";
import { LINKS_LIST } from "./linksList.js";

if (!fs.existsSync("./wallpapers")) {
  fs.mkdirSync("./wallpapers");
}

const links = LINKS_LIST.map((link) => {
  return { link: link, name: /(\d+-\w+_\d+x\d+\.jpg)/i.exec(link)[0] };
});

let totalSize = 0;
let downloadedFiles = 0;

links.forEach((l) => {
  let stream = fs.createWriteStream(`./wallpapers/${l.name}`);
  console.log(chalk.blue(`Starting download: ${l.name}`));
  http
    .get(l.link, (data) => {
      data.pipe(stream);
      let fileSize = 0;
      data.on("data", (chunk) => {
        fileSize += chunk.length;
      });
      stream.on("finish", () => {
        downloadedFiles++;
        totalSize += fileSize;
        console.log(chalk.green(`Completed download: ${l.name}`));
        if (downloadedFiles === links.length) {
          console.log(
            chalk.yellow(
              `Downloaded ${downloadedFiles} files with a total size of ${(
                totalSize /
                (1024 * 1024)
              ).toFixed(2)} MB`
            )
          );
        }
      });
      stream.on("error", (err) => {
        console.log(chalk.red(`Error downloading ${l.name}: ${err.message}`));
      });
    })
    .on("error", (err) => {
      console.log(
        chalk.red(`Error with request for ${l.name}: ${err.message}`)
      );
    });
});
