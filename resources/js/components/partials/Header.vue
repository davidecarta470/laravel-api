<template>
  <div>
    <header>
      <ul>
        <li><h3><a href="" >home</a></h3></li>
        <li><h3><a href="" class="active">blog</a></h3></li>
        <li><h3><a href="">about</a></h3></li>
        <li><h3><a href="">contacts</a></h3></li>
      </ul>
    </header>
  </div>
</template>


<script>
export default {
   name:"Header"
}
</script>

<style lang="scss" scoped>
header{
  background-color:rgb(181, 202, 240);
  ul{
    height: 50px;
    list-style:none;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  li{
    padding: 0 20px;
    a{
      text-decoration: none;
      color :white;
      &:hover{
        color:rgb(60, 147, 228);
      }
      &.active{
        color:blue;
      }
    }
  }

}
</style>