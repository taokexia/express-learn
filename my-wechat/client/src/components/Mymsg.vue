<template>
    <div class="clear">

        <div class="item">
            <div class="name">
                {{name}}
            </div>
            <img :src="head" alt="" class="head">
            <div v-if="img">
                <img :src="img" alt="" class="img">
            </div>
            <span v-if="msg">
                {{msg}}
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    props: ['name', 'img', 'msg', 'head']
}
</script>

<style scoped>
.clear {
	margin-top: 10px;
}

.clear .item {
	position: relative;
	clear: both;
	display: inline-block;
	padding: 16px 40px 16px 20px;
	margin: 10px 10px 20px 10px;
	border-radius: 10px;
	background-color: rgba(25,147,147,0.2);
	animation: show-chat-odd 0.25s 1 ease-in;
	-moz-animation: show-chat-odd 0.25s 1 ease-in;
	-webkit-animation: show-chat-odd 0.25s 1 ease-in;
	float: right;
	margin-right: 80px;
	color: #0ad5c1;
}

.clear .item .img {
	max-width: 200px;
}

.clear .item span {
	word-break: break-all;
}

.clear .item .name {
	position: absolute;
	top: -20px;
	width: 50px;
	height: 20px;
	right: -70px;
	text-align: center;
}

.clear .item .head {
	position: absolute;
	top: 0;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	right: -70px;
}

.clear .item:after {
	position: absolute;
	top: 15px;
	content: '';
	width: 0;
	height: 0;
	border-top: 15px solid rgba(25,147,147,0.2);
	border-right: 15px solid transparent;
	right: -15px;
}

@-moz-keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}

@-webkit-keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}

@-moz-keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}

@-webkit-keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}

@-o-keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}

@keyframes show-chat-odd {
	0% {
		margin-right: -480px;
	}

	100% {
		margin-right: 0;
	}
}
</style>