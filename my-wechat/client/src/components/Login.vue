<template>
    <div class="login" v-show="getlogintoggle">
        <div class="header">
            <mu-appbar title="Title">
                <mu-button flat slot="default">登录</mu-button>
            </mu-appbar>
        </div>
        <div class="content">
            <form action="" name="form2">
                <mu-text-field label="帐号" label-float v-model="name"></mu-text-field>
                <br/>
                <mu-text-field label="密码" type="password" label-float v-model="password"></mu-text-field>
                <br/>
                <mu-button flab fullWidth @click="submit" primary>登录</mu-button>
            </form>
            <div @click="register">
                注册帐号
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    export default{
        data() {
            return {
                loading: '',
                name: '',
                password: ''
            }
        },
        methods: {
            submit() {
                var name = this.name.trim()
                var password = this.password.trim()
                if (name !== '' && password !== '') {
                    var data = {
                        name: name,
                        password: password
                    }
                    //                this.loading = 'loading'
                    this.$store.dispatch('loginsubmit', data)
                    document.form2.reset()
                    this.$store.commit('setIsLogin', true)
                } else {
                    this.$store.commit('changedialog')
                    this.$store.commit('changedialoginfo', '帐号密码不能为空')
                }
            },
            register() {
                this.$store.commit('openregistertoggle')
                this.$store.commit('closelogintoggle')
            }
        },
        computed: {
            ...mapGetters([
                'getlogintoggle'
            ])
        }
    }
</script>

<style>
.login {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
}

.login .mu-appbar {
  text-align: center;
}

.mu-appbar .mu-flat-button-label {
  font-size: 20px;
}

.login .content {
  width: 80%;
  margin: 20px auto;
}

.content .mu-text-field {
  width: 100%;
}

.content .mu-raise-button {
  min-width: 80px;
  display: block;
  margin: 0 auto;
  transition: all 0.375s;
}

.content .mu-raise-button.loading {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>