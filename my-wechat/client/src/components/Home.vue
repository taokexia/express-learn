<template>
    <div>
        <div class="header">
            <div class="head">
                <img :src="getusersrc" alt="">
            </div>
            <div class="name">
                {{getusername}}

            </div>
            <div class="background">
                <img :src="getusersrc" alt="">
            </div>
        </div>
        <div class="content">
            <mu-list>
              <mu-list-item button :ripple="false">
                <mu-list-item-action>
                  <mu-icon value="inbox"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>Inbox</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-action>
                  <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>Stared</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-action>
                  <mu-icon value="send"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>Sent mail</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-action>
                  <mu-icon value="drafts"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>Drafts</mu-list-item-title>
              </mu-list-item>
            </mu-list>
            <mu-divider />
            <mu-list>
              <mu-list-item button :ripple="false">
                <mu-list-item-title>All mail</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-title>Trash</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-title>Spam</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item button :ripple="false">
                <mu-list-item-title>Follow up</mu-list-item-title>
                <mu-list-item-action>
                  <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
        </div>
        <div class="logout">
            <mu-button flab @click="logout" class="demo-raised-button" fullWidth>退出</mu-button>
        </div>
        <div style="height:80px"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    export default{
        computed: {
            ...mapGetters([
                'getusersrc',
                'getusername'
            ])
        },
        methods: {
            logout() {
                this.$store.commit('setusername', '')
                this.$store.commit('setusersrc', '')
                this.$store.commit('openlogintoggle')
                this.$store.commit('setIsLogin', false)
            }
        }
    }
</script>

<style scoped>
.header {
	width: 100%;
	height: 200px;
}

.header .head {
	width: 80px;
	margin: 20px auto 0;
}

.header .head img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
}

.header .name {
	height: 50px;
	line-height: 50px;
	color: #fff;
	font-size: 18px;
	text-align: center;
}

.header .background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200px;
	z-index: -1;
	filter: blur(10px);
}

.header .background img {
	width: 100%;
	height: 100%;
}

.logout {
	width: 200px;
	margin: 0 auto;
}

.logout .mu-raised-button {
	background: #ff4081;
	color: #fff;
}
</style>
