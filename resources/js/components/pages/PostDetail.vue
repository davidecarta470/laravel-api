<template>
<div>
  <div class="container">
    <h1>{{post.title}}</h1>

    <h4 v-if="post.category">{{post.category.name}}</h4>
    <h4 v-else></h4>
    <div class="tag">
      <span v-for="tag in post.tags" :key="tag.id"> {{tag.name}} </span>
    </div>
    <p>{{post.content}}</p>
  </div>

</div>
</template>

<script>
export default {
  name:'postDetail',
  data(){
    return{
      apiUrl:'http://127.0.0.1:8000/api/posts/',
      post:{
        title:'',
        slug:'',
        category:'',
        tags:[],
        content:''
      }
    }
  },
  methods:{
    getApi(slug){
      axios.get(this.apiUrl + slug)
            .then(r=>{
              this.post = r.data
              console.log(this.post)
            })
    }
  },
  mounted(){

    this.getApi(this.$route.params.slug)
  }
}
</script>

<style lang="scss" scoped>
.container{
  width:60%;
  margin:30px auto;
  h4,h1,p{
    margin:20px 0;
  }
  .tag{
    span{
      font-size: 12px;
      background-color: rgb(68, 115, 214);
      padding: 2px 10px;
      margin: 10px;
      color:white;
      border-radius: 2px;
    }
  }
}
</style>