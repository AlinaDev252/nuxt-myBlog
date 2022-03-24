<template>
  <div id="posts-class">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
           {
            id: "1",
            title: "First Post",
            previewText: "This is our first post!",
            thumbnail:
            "https://media.istockphoto.com/photos/abstract-blue-digital-background-picture-id1146532466?k=20&m=1146532466&s=612x612&w=0&h=NjZrRzJH4nvxVmTGTvMrMrPGQ03fDNYTmRNoEiNSeCQ="
           },
           {
            id: "2",
            title: "Second Post",
            previewText: "This is our second post!",
            thumbnail:
            "https://media.istockphoto.com/photos/abstract-blue-digital-background-picture-id1146532466?k=20&m=1146532466&s=612x612&w=0&h=NjZrRzJH4nvxVmTGTvMrMrPGQ03fDNYTmRNoEiNSeCQ="
           }
          ]
       });
    }, 1000);
  })
  .then(data => {
    return data
  })
  .catch(e => {
      context.error(new Error())
    })
  },
}
</script>

<style scoped>
.posts-class {
  display: flex;
  justify-content:center;
  align-items:center;
}
</style>