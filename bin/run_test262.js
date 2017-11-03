const fs = require("fs")
const run = require("test262-parser-runner")
const parse = require("..").parse

run(
  (content, {sourceType}) => {
    return parse(content, { sourceType, ecmaVersion: 9 });
  },
  testContent => (testContent.match(/^features: \[.*\b(object-(spread|rest)|regexp-named-groups|BigInt|async-iteration|class-fields|regexp-unicode-property-escapes|regexp-lookbehind|regexp-dotall|optional-catch-binding)\b.*\]$/m)),
  fs.readFileSync("./bin/test262.whitelist", "utf8").split("\n").filter(v => v)
)
