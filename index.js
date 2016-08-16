var translate = require('./lib/translate')
var fillIndent = require('./lib/fillIndent')

// 把 AST 转换成 ATT
function att(ast, options) {
	return fillIndent(translate(ast))
}

module.exports = exports = att