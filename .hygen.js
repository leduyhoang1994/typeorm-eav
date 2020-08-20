const path = require('path');
const rootDir = process.cwd();

let configPath = path.resolve(rootDir + '/eavConfig.js');

const fs = require("fs"); // Or `import fs from "fs";` with ESM
if (!fs.existsSync(configPath)) {
  console.error("\x1b[31m", "Please create eavConfig.json at root !",'\x1b[0m');
  process.exit(1);
}
const eavConfig = require(configPath);
eavConfig.path = eavConfig.path ? eavConfig.path.replace(/^\/|\/$/g, '') : 'migrations';

module.exports = {
  helpers: {
    path: "lalalala",
    ...eavConfig
  }
};