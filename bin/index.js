#!/usr/bin/env node
import axios from "axios";
import FormData from "form-data";
import fs from 'fs';
import chalk from 'chalk';
import yargs from "yargs";
var argv = yargs(process.argv.slice(2))
    .usage(chalk.green('UploaderCLI - Personal CLI for upload files to my remote server'))
    .help('help').alias('help', 'h')
    .version('version', '0.1.0').alias('version', 'V')
    .options({
        input: {
            alias: 'i',
            description: "<filename> Input file name",
            requiresArg: true,
            required: true
        },
    })
    .argv;

async function uploadFile(filePath, url) {
    try {
        const formData = new FormData();
        formData.append('files', fs.createReadStream(filePath));

        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-api-key': 'your-api-key',
                ...formData.getHeaders(),
            },
        });

        console.log(chalk.green('✔️Done with message: ') + `${response.data.message}`);

    } catch (error) {
        console.error(chalk.red("❌  An error occurred!"));
    }
}
async function main(){
    await uploadFile(argv.input, 'http://localhost:5000/upload');
}

main()