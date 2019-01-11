#!/usr/bin/env node
const program = require("commander");
const generatePseudoWords = require("./src/generatePseudoWord.js");

let args = { };

program.arguments("<quantity>")
    .action(_ => args.quantity = _)
    .option("-f, --format <format>",
                      `%a Adjective
                       %A Animal
                       %p Pseudo word`)
    .parse(process.argv);

args.format = program.format;

generatePseudoWords(3);
