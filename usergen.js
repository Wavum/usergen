#!/usr/bin/env node
const program = require("commander");
const getUsername = require("./src/getUsername.js");

let args = { };

program.arguments("<quantity>")
    .action(_ => args.quantity = _)
    .option("-f, --format <format>",
                      `%a Adjective
                       %A Animal
                       %p Pseudo word`)
    .parse(process.argv);

args.format = program.format || "%a_%A";
args.quantity = args.quantity || 1;

for (let i = 0; i < args.quantity; i++) {
    const username = getUsername(args.format);

    console.log(username);
}
