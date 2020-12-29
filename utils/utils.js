
/**
 * 
 * uview 顶部消息提示封装
 * type:primary(默认)、success、info、warning、error
 * */ 
export const toast = (obj={
	el:"",
	title: "",
	type: '',
	duration: ''
}) => {
	let {el,title,duration,type} = obj
	el.show({
		title: title,
		type: type||'success',
		duration: duration||'2000'
	});
}
