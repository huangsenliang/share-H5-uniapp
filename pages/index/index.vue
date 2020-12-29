<template>
	<view class="page">
		<view class="content1">
			<view class="flex align-items justify-center padding-t-40"><image src="../../static/logo.png" style="width: 226rpx;" mode="widthFix"></image></view>
			<view class="font-bold title text-white font-90 flex align-items flex-column justify-center margin-top-60 font">
				<view class="">诚邀同行</view>
				<view class="">共建灵活用工</view>
				<view class="">场景平台</view>
			</view>
			<view class="flex align-items justify-center margin-top-60"><image src="/static/phone.png" style="width: 332rpx;" mode="widthFix"></image></view>
			<view class="flex align-items justify-center margin-top-60"><image src="/static/bg1.png" style="width: 100%;" mode="widthFix"></image></view>
		</view>
		<view class="content2 bg-white padding-t-90 padding-lr-30">
			<view class="flex justify-center font-64 font-bold">共建场景平台登记</view>
			<view class="form-wrap margin-top-60">
				<u-form :model="form" ref="uForm">
					<u-form-item :border-bottom="false" label-position="top" label="姓名（已加密）"><u-input :border="true" v-model="form.name" /></u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="电话（已加密）"><u-input :border="true" v-model="form.phone" /></u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="所属行业">
						<u-input :border="true" v-model="form.sex" type="select" @click="show = true" />
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="我希望的方案"><u-input :border="true" v-model="form.plan" /></u-form-item>
				</u-form>
			</view>
			<view class="flex justify-center padding-tb-80"><view class="btn-Br-Cw">我要共建</view></view>
		</view>
		<view class="content3 padding-lr-46">
			<view class="content3-1 padding-t-90">
				<view class=" flex justify-center font-90 text-orange font-bold">上半场</view>
				<view class="padding-t-40 flex justify-around">
					<view class="font-90 text-orange font-bold flex">
						<image src="/static/jingcha.png" style="width: 235rpx;" mode="widthFix"></image>
						<text>?</text>
					</view>
					<view class="padding-lr-30">
						<view class="font-45 text-white">
							<view class="">税务筹划</view>
							<view class="">灵活用工结算</view>
						</view>
						<view class="padding-tb-30">
							<view class="font-42 text-white flex align-end">
								<image src="/static/gou.png" style="width: 45rpx;height: 45rpx;" mode="widthFix"></image>
								<text class="padding-lr-15">三流一致</text>
							</view>
							<view class="font-42 text-white flex align-end">
								<image src="/static/gou.png" style="width: 45rpx;height: 45rpx;" mode="widthFix"></image>
								<text class="padding-lr-15">四流合一</text>
							</view>
						</view>
						<view class=" text-orange font-45 font-bold">
							<view class="">如何保障</view>
							<view class="">业务真实性？</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content3-2 padding-t-90">
				<view class=" flex justify-center font-90 text-orange font-bold">下半场</view>
				<view class="padding-t-40 flex align-items justify-between">
					<view class="border-card-250 font-45 text-white">
						<view class="">灵活用工</view>
						<view class="">
							<text class="font-bold">结算</text>
							平台
						</view>
					</view>
					<view class="sanjiaoxing-box flex align-items justify-center font-23 text-white"><text style="margin-right: 20rpx;">转型</text></view>
					<view class="border-card-250 font-45 text-white">
						<view class="">灵活用工</view>
						<view class="">
							<text class="font-bold text-orange">场景</text>
							平台
						</view>
					</view>
				</view>
				<view class="padding-t-30 flex justify-between">
					<text class="text-white font-32">◉ 真实用工</text>
					<text class="text-white font-32">◉ 活动轨迹</text>
					<text class="text-white font-32">◉ 优化组织</text>
				</view>
			</view>
			<view class="font-53 padding-t-10 text-orange flex justify-center font-bold"><view class="">转型行业场景平台才有未来</view></view>
			<!-- ******* -->
			<view class="padding-t-90 flex justify-around">
				<view class="font-90 text-orange font-bold flex "><image src="/static/jingcha2.png" style="width: 235rpx;" mode="widthFix"></image></view>
				<view class="padding-l-20">
					<view class=" text-orange font-45 font-bold">
						<view class="">地方政府顺利</view>
						<view class="">开通委托代征</view>
					</view>
					<view class="padding-t-30">
						<view class="font-42 text-white flex align-end">
							<image src="/static/gou.png" style="width: 45rpx;height: 45rpx;" mode="widthFix"></image>
							<text class="padding-lr-15">不限制发票量</text>
						</view>
						<view class="font-42 text-white flex padding-t-10">
							<image src="/static/gou.png" style="width: 45rpx;height: 45rpx;" mode="widthFix"></image>
							<text class="padding-lr-15">不再担心频繁税务稽查</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content4 padding-t-90 ">
			<view class="text-white font-45 flex justify-center"><text>行业场景平台</text></view>
			<view class="img-box flex flex-wrap">
				<image src="/static/elm.png" mode="widthFix"></image>
				<image src="/static/meituan.png" mode="widthFix"></image>
				<image src="/static/bskd.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="content4 padding-t-130 padding-b-80">
			<view class="flex flex-column align-items text-white font-78">
				<text>共建场景平台</text>
				<text>合作方式</text>
			</view>
			<view class="padding-t-30">
				<view v-for="(item, index) of planList" :key="index" class="margin-t-10 border-card-690 margin-auto flex flex-column align-items">
					<view class="text-orange">
						<text class="round-small">方</text>
						<text class="round-small">案</text>
						<text v-if="index==0" class="round-small">一</text>
						<text v-if="index==1" class="round-small">二</text>
						<text v-if="index==2" class="round-small">三</text>
					</view>
					<text class="text-white font-50">{{ item.content }}</text>
				</view>
			</view>
		</view>
		<view class="content6 bg-white padding-t-90 padding-lr-30">
			<view class="flex justify-center font-64 font-bold">共建场景平台登记</view>
			<view class="form-wrap margin-top-60">
				<u-form :model="form" ref="uForm">
					<u-form-item :border-bottom="false" label-position="top" label="姓名（已加密）"><u-input :border="true" v-model="form.name" /></u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="电话（已加密）"><u-input :border="true" v-model="form.phone" /></u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="所属行业">
						<u-input :border="true" v-model="form.sex" type="select" @click="show = true" />
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item :border-bottom="false" label-position="top" label="我希望的方案"><u-input :border="true" v-model="form.plan" /></u-form-item>
				</u-form>
			</view>
			<view class="flex justify-center padding-tb-80"><view class="btn-Br-Cw">我要共建</view></view>
		</view>
		<view class="content7 padding-lr-50 padding-t-130">
			<view class="process-wrap">
				<view class="header font-64 text-white">我们的优势</view>
				<view class="process-list padding-t-80">
					<view v-for="(item,index) of processList" :key="index" class="process-item position-relative padding-lr-30 padding-b-40">
						<text class="round"></text>
						<view class="text-orange font-38">{{item.title}}</view>
						<view class="text-white">{{item.content}}</view>
						<view v-if="item.content" class="text-white">{{item.content2}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content8 padding-lr-50 padding-tb-80">
			<view class="process-wrap">
				<view class="header font-64 text-white">关于我们</view>
				<view class="text-white font-32 padding-lr-30 margin-t-10 padding-tb-60">
					零工云是一家融合财税和人力资源两大专业服务领域，集成运用互联网、大数据、
					人工智能等新一代信息技术的科技型企业，专注于为灵活用工行业提供全方位的技术支持，
					服务包含交易结算系统定制、行业应用场景开发、地方服务中台集成等，
					赋能企业降本增效、优化和提升组织效率，
					增强企业核心竞争力，促进地方园区合规健康发展，更好的服务创业就业。
				</view>
			</view>
			<view class="img-phone flex justify-center padding-t-90">
				<image src="/static/phone.png" mode="widthFix" style="width: 332rpx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			processList:[
				{
					title:"工程师托管外包",
					content:"简化社保处理，优化了个人个税	"
				},
				{
					title:"软著申请",
					content:"软著申请"
				},
				{
					title:"技术合同认定	",
					content:"保障费用的研发费用属性，可以享受研发费加计扣除，扣除比例高达60%，减免15%所得税。"
				},
				{
					title:"校企合作型服务外包产业园",
					content:"更多优秀的计算机工程师"
				},
				{
					title:"中小城市地域收入差异",
					content:"人力成本投入更有优势"
				},
				{
					title:"中小城市鼓励科技创新",
					content:"中小城市鼓励科技创新"
				},
				{
					title:"成熟的灵活用工结算系统",
					content:"集成场景平台，更省时省钱"
				},
				{
					title:"完善的项目管理支持",
					content:"一对一技术总监项目辅导",
					content2:"开发流程全透明化系统管理"
				},
				
			],
			planList: [
				{
					title: '方案一',
					content: '按资金流水结算'
				},
				{
					title: '方案二',
					content: '按技术管理结算'
				},
				{
					title: '方案三',
					content: '按平台用户数结算'
				}
			],
			form: {
				name: '',
				phone: '',
				sex: '',
				plan: ''
			},
			actionSheetList: [
				{
					text: '行业一'
				},
				{
					text: '行业二'
				},
				{
					text: '行业三'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		// 点击actionSheet回调
		actionSheetCallback(index) {
			this.form.sex = this.actionSheetList[index].text;
		}
	}
};
</script>

<style lang="scss">
// start 页面共有样式
.process-item{
	line-height: 50rpx;
}


.round-small{
	display: inline-block;
	width: 50rpx;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 25rpx;
	font-weight: 400;
	text-align: center;
	color: #f47911;
	margin-right: 10rpx;
	border-radius: 50%;
	background-color: rgba(0,0,0,.2);
}
.round{
	position: absolute;
	top: 15rpx;
	left: 0;
	transform: translateX(-50%);
	width: 21rpx;
	height: 21rpx;
	margin-left: 2rpx;
	background: #f47911;
	border-radius: 50%;
}

.border-card-250 {
	width: 250rpx;
	border: 2rpx solid #ffffff;
	border-radius: 10rpx;
	padding: 30rpx;
}

.border-card-690 {
	width: 690rpx;
	border: 2rpx solid #ffffff;
	border-radius: 10rpx;
	padding: 30rpx;
}

.sanjiaoxing-box {
	background: url(../../static/yousanjiao.png);
	background-size: 100% 100%;
	width: 140rpx;
	height: 130rpx;
}

.font-32 {
	font-size: 32rpx;
}

.font-38 {
	font-size: 38rpx;
}

.font-53 {
	font-size: 53rpx;
}

.font-50 {
	font-size: 50rpx;
}

.padding-t-25 {
	padding-top: 25rpx;
}

.padding-t-130 {
	padding-top: 130rpx;
}

.padding-t-10 {
	padding-top: 10rpx;
}

.padding-b-40 {
	padding-bottom: 40rpx;
}

.padding-tb-60{
	padding-bottom: 60rpx;
	padding-top:60rpx;
}

.margin-t-10 {
	margin-top: 10rpx;
}

.padding-lr-15 {
	padding-right: 15rpx;
	padding-left: 15rpx;
}

.padding-l-20 {
	padding-left: 20rpx;
}

.padding-lr-50 {
	padding-left: 50rpx;
	padding-right: 50rpx;
}

.font-78 {
	font-size: 78rpx;
}
// end
.page {
	height: 100vh;
	.content4 {
		.img-box {
			width: 558rpx;
			margin: 25rpx auto 0;
			image {
				width: 166rpx;
				margin-bottom: 30rpx;
			}
			image:not(:nth-child(3n + 0)) {
				margin-right: 30rpx;
			}
		}
	}
	.content7 .process-wrap{
		width: 648rpx;
		background-image: url(../../static/process1.png);
		background-size: 100% 100%;
	}
	
	.content8 .process-wrap{
		width: 648rpx;
		background-image: url(../../static/process2.png);
		background-size: 100% 100%;
	}
		
	.content7,.content8 {
		.process-wrap {
			position: relative;
			width: 648rpx;
			.header{
				width: 100%;
				text-align: center;
				position: absolute;
				left: 50%;
				top: 0rpx;
				transform: translate(-50%,-50%);
			}
		}
	}
}
</style>
