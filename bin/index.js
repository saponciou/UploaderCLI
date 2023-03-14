#!/usr/bin/env node
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('UploaderCLI - Personal CLI for upload files to my remote server\nUsage: $0 [options]')
    .help('help').alias('help', 'h')
    .version('version', '1.0.1').alias('version', 'V')
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

        console.log(`Ended with message: ${response.data.message}`);

    } catch (error) {
        console.error(error.message);
    }
}
async function main(){
    await uploadFile(argv.input, 'http://localhost:5000/upload');
}

main()