<template>
    <div>
        <mu-dialog :open="getdialog" title="提示" @close="close">
            {{getdialoginfo}}
            <mu-button flat slot="actions" @click="close" primary>取消</mu-button>
            <mu-button flat slot="actions" primary @click="close">确定</mu-button>
        </mu-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    export default {
        methods: {
            open () {
                this.$store.commit('changedialog')
            },
            close () {
                this.$store.commit('changedialog')
            }
        },
        computed: {
            ...mapGetters([
                'getdialog',
                'getdialoginfo'
            ])
        }
    }
</script>