<template>
  <div id="posts-class">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  middleware: 'log',
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
};
</script>

<style scoped>
.posts-class {
  display: flex;
  justify-content:center;
  align-items:center;
}
</style>