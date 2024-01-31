#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

// checking project exists or not
if (fs.existsSync("./src")) {
  console.log("Your have already create project");
  console.log(
    "if your want re create project please remove all file and folder in directory"
  );
  return;
}

if (process.argv[2] === "--yes") {
  exec("npm init --yes", () => {
    console.log("npm init success");
    console.log(
      "please wait for few second for install package and project structure..."
    );
  });

  exec("npm install express", () => {
    console.log("please wait...");
    // create directory
    fs.mkdirSync(`./src`);
    fs.mkdirSync(`./src/controllers`);
    fs.mkdirSync(`./src/middlewares`);
    fs.mkdirSync(`./src/models`);
    fs.mkdirSync(`./src/routes`);
    fs.mkdirSync(`./src/services`);
    fs.mkdirSync(`./src/utils`);

    // create files

    fs.writeFileSync(`./app.js`, fs.readFileSync(`${__dirname}/lib/app.js`));

    fs.writeFileSync(
      `./index.js`,
      fs.readFileSync(`${__dirname}/lib/index.js`)
    );

    fs.writeFileSync(`./.env`, "");

    fs.writeFileSync(`./example.env`, "");

    fs.writeFileSync(
      `./.gitignore`,
      fs.readFileSync(`${__dirname}/lib/gitignore`)
    );

    fs.writeFileSync(
      `./src/routes/api.js`,
      fs.readFileSync(`${__dirname}/lib/api.js`)
    );

    console.log("completed all task and open your project ");
    console.log("Please run your express server ");
  });
}
