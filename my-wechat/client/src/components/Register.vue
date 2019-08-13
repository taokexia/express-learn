<template>
    <div class="register" v-show="getregistertoggle">
        <div class="header">
            <mu-appbar title="Title">
                <mu-button flat slot="default">注册</mu-button>
            </mu-appbar>
        </div>
        <div class="content">
            <form action="" name="form1">
                <mu-text-field label="帐号" label-float v-model="username"/>
                <br/>
                <mu-text-field label="密码" type="password" label-float v-model="password"/>
                <br/>
                <mu-button flab fullWidth @click="submit" primary>注册</mu-button>
            </form>
            <div @click="login">
                我已有帐号
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6" scoped>
    import {mapGetters} from 'vuex'
    export default {
        data() {
          return {
            username: '',
            password: ''
          }
        },
        methods: {
            submit() {
                var name = this.username.trim()
                var password = this.password.trim()
                var src = './static/img/' + Math.ceil(Math.random() * 10) + '.jpg'
                if (name !== '' && password !== '') {
                    var data = {
                        name: name,
                        password: password,
                        src: src
                    }
                    this.$store.dispatch('registersubmit', data)
                } else {
                    this.$store.commit('changedialog')
                    this.$store.commit('changedialoginfo', '帐号密码不能为空')
                }
            },
            login() {
                this.$store.commit('openlogintoggle')
                this.$store.commit('closeregistertoggle')
            }
        },
        computed: {
            ...mapGetters([
                'getregistertoggle'
            ])
        }
    }
</script>

<style scoped>
.register {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #fff;
}

.register .mu-appbar {
	text-align: center;
}

.register .mu-appbar .mu-flat-button-label {
	font-size: 20px;
}

.register .content {
	width: 80%;
	margin: 20px auto;
}

.register .content .mu-text-field {
	width: 100%;
}
</style>
