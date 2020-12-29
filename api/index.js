/**
 * 首页分享接口
 */

import request from '@/common/http.interceptor.js'


/**
 * 个体户新增   
 */
export function informationAdd(data) {
	return request.post('/information/add', data)
}