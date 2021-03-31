<template>
    <span>
        <img src="../assets/1.png" alt="" v-if="show==false" @click="up"><img src="../assets/2.png" alt="" @click="xia" v-else >
    </span>
</template>

<script>
export default {
    data() {
        return {
            show:false
        };
    },
    mounted() {},
    methods: {
        up(){
            this.show = true
            this.$store.commit('up')
        },
        xia(){
             this.show = false
            this.$store.commit('xia')
        },
    },
};
</script>

<style lang='scss' scoped>

</style>
