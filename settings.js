/**
 * 注意配置需要 VUE_APP_ 开始防止与其他内容冲突
 * 其他页面可调用 process.env.xxx 获取配置信息
 */
const ENV = {
	// 开发模式配置
	development: {
		VUE_H5_BASE_API: 'http://lgyun.com.cn/api', // H5基本请求地址
	},
	// 生产模式配置
	production: {
		VUE_H5_BASE_API: 'http://lgyun.com.cn/api',
	}
}


module.exports = ENV
