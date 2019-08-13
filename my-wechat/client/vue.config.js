module.exports = {
  devServer: {
		proxy: { //配置自动启动浏览器
			"/api/*": {
				target: "http://localhost:3000",
				changeOrigin: true,
        ws: true,//websocket支持
        pathRewrite: {'^/api' : ''}
			}
		}
	},
}