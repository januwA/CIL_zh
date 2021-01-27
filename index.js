const fs = require("fs");
const { htmlAst, traverse, AstText } = require("html-static");

const ast = htmlAst(fs.readFileSync("./index.html").toString());

traverse(ast, {
  element_tr(node) {
    let Description = node.children[2];
    Description.children.forEach((e) => {
      if (e.name === "b") {
        e.replaceWith(new AstText(e.children[0].value));
      }
    });
  },
}).then(() => {
  fs.writeFileSync('./a.html', ast.toString())
});
