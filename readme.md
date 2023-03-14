# UploaderCLI

UploaderCLI is a command-line tool that allows users to upload files to a server.

## Prerequisites

To run UploaderCLI, you'll need:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- [UploaderAPI](https://github.com/saponciou/UploaderAPI)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/saponciou/UploaderCLI.git
```

2. Install dependencies:

```bash
cd UploaderCLI
npm install
```

3. Install UploaderCLI globally:

```bash
npm install -g .
```

4. Edit the endpoint url:

Go to `./bin/index.js:41` and change the url

```javascript
...await uploadFile(argv.input, 'http://{ip}:{port}/upload');
```

5. Use the `upldr` command to upload a file:

```bash
upldr -i /path/to/file
```

By default, the uploaded file will be saved on the server with the same name as the local file.

## License

UploaderCLI is released under the MIT License. See `LICENSE` for details.
