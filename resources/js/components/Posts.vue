<template>
  <main class="container">
    <h1>I miei post</h1>
    <PostItem 
    v-for="post in posts" :key="post.id"
    :post="post"
    />
    <div>
      <button 
        @click="getApi(pagination.current - 1)"
        :disabled="pagination.current===1"
      > << </button>

      <button 
        v-for="i in pagination.last" :key="i"
        @click="getApi(i)"
        :disabled="pagination.current === i"
      >
        {{i}}
      </button>
      
      <button 
        @click="getApi(pagination.current + 1)"
        :disabled="pagination.current===pagination.last"
      > >> 
      </button>

    </div>
  </main>
</template>

<script>
import PostItem from "./partials/PostItem.vue";
export default {
  name:"Posts",
  components:{
    PostItem,
  },
  data(){
    return{
      apiUrl:'http://127.0.0.1:8000/api/posts?page=',
      posts:null,
      pagination:{},
      page:1
    }
  },
  methods:{
    getApi(page = 1){
      axios.get(this.apiUrl + page)
      .then(r => {
        
        this.posts= r.data.data;
        this.pagination={
          current:r.data.current_page,
          last:r.data.last_page,

        }
        
      })
    },
    goOn(){
      if(this.page<3){
        this.page++
        this.getApi(this.page)
      }
    },


    goBack(){
      if(this.page>1){
        this.page--
        this.getApi(this.page)
      }
    }
      
  },
  mounted(){
    this.getApi()
  }

}
</script>

<style lang="scss" scoped>
main{
  h1{
    text-align: center;
  }
  div{
    button{
      width:30px;
      margin-right:10px;
    }
  }
}
</style>