import chalk from "chalk";
import fs from "fs";
import { Template } from "../types";

export class Generator {
  writeFile(template: Template) {
    fs.writeFile(template.name + template.ext, template.file, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(
        chalk.magenta(`File ${template.name + template.ext} written ✨`)
      );
    });
  }
}
