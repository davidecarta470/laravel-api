<template>
  <div class="post">
    <h3 ><a href="">{{post.title}}</a></h3>
    <h5>{{formatData}}</h5>

    <div v-if="post.category">
      <h6>{{post.category.name}}</h6>
    </div>
    
    <p>{{cutTest}}</p>
  </div>
</template>

<script>
export default {
  name:'PostItem',
  data(){
    return{
      content:''
    }
  },
  props:{
    post:Object
  },
  computed:{
    cutTest(){
      
      return this.post.content.substr(0,50)+'....'
      
    },
    formatData(){
      const d = new Date(this.post.created_at)
      let day = d.getDate()
      let month= d.getMonth()+1
      let year = d.getFullYear()
      if(day<10){
        day= '0'+ day
      }
      if(month<10){
        month= '0'+ month
      }
      return `${day} / ${month} / ${year}`
    }
  }
  
}
</script>

<style  lang="scss"  scoped>
.post{
  width:80%;
  margin : 20px auto;
  h2{
    a{
      color:rgb(90, 90, 226);
      text-decoration:none;

    }
  }
}
</style>