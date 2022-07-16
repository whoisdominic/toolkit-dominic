import chalk from "chalk";
// import { Generator } from "./generator";
// import { httpClient } from "./modules/httpClient";
// import { Command } from "commander";

import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function main() {
  console.log(
    chalk.magenta("Oi! 🐘 Welcome to Dominic's toolkit! Tf you want?")
  );

  readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`);
    readline.close();
  });

  // const program = new Command();

  // program
  //   .name("string-util")
  //   .description("CLI to some JavaScript string utilities")
  //   .version("0.8.0");

  // program
  //   .command("split")
  //   .description("Split a string into substrings and display as an array")
  //   .argument("<string>", "string to split")
  //   .option("--first", "display just the first substring")
  //   .option("-s, --separator <char>", "separator character", ",")
  //   .action((str, options) => {
  //     const limit = options.first ? 1 : undefined;
  //     console.log(str.split(options.separator, limit));
  //   });

  // program.parse();

  return 0;
}
main();

// console.log(chalk.magenta("Generating file"));

// const gen = new Generator();

// gen.writeFile(httpClient);

// console.log(chalk.magenta("\n\n😎 Done!"));
