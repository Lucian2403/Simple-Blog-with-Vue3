<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>  
  </div>
</template>

<script>
// composables imports
import getPosts from '../composables/getPosts'
// component imports
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { PostList, TagCloud, Spinner },
  setup() {  
    //grabbing the values from 'export' function from 'getPosts.js'
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>