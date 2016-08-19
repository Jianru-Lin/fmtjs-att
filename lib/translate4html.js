module.exports = translate

function translate(ast) {
	// 不作任何处理，直接把这个 AST 返回
	// 这是因为目前我们所有的工作是靠 html 中的 js 完成的
	// 未来细节研究成熟后会改为在这里实现
	return ast
}
