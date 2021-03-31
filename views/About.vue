<template>
  <div class="about">
    <input type="text" v-model="value" @input="sou"/>
    <div class="name">
      <ul>
        <li>编号 <fen></fen></li>
        <li>名称</li>
        <li>价格<jia></jia></li>
      </ul>
    </div>
    <div class="lists">
      <div class="page" v-for="item in $store.state.list" :key="item.id">
        <ul>
          <li>{{item.id}}</li>
          <li>{{item.goods_name}}</li>
          <li>{{item.price}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fen from '../components/pai'
import jia from '../components/jia'
export default {
  components:{
   fen,
   jia
  },
  data() {
    return {
    value:''
    };
  },
  mounted() {
    this.$axios.get('data.json').then((res) => {
      console.log(res.data.data);
      this.$store.commit('add', res.data.data)
    })
  },
  methods: {
    sou(){
      this.$store.commit('sou', this.value)
    }
  },
};
</script>

<style lang='scss' scoped>
.about {
  width: 800px;
  margin: 0 auto;
}
.name{
  width: 100%;
  height: 30px;
  background-color: #ccc;
  margin-top: 10px;
  ul{
    width: 100%;
    height: 100%;
    line-height: 30px;
    display: inline-flex;
    li{
      width: 33%;
      text-align: center;
      // vertical-align: middle;
    }
  }
}
.lists{
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 10px;
  .page{
    width: 100%;
    border-bottom: 1px solid #ccc;
    ul{
    width: 100%;
    height: 100%;
    line-height: 30px;
    display: inline-flex;
    li{
      width: 33%;
      text-align: center;
      border-left: 1px solid #ccc;
    }
  }
  }
}
</style>
