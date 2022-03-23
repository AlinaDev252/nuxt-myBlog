<template>
  <div id="posts-class">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList,
  }
}
</script>

<style scoped>
.posts-class {
  display: flex;
  justify-content:center;
  align-items:center;
}
</style>