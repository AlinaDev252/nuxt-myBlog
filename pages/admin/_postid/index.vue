<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout:'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Alina',
        title: 'My awsome Post',
        content: 'Super amazing, thanks for that!',
        thumbnail: 'https://media.istockphoto.com/photos/abstract-blue-digital-background-picture-id1146532466?k=20&m=1146532466&s=612x612&w=0&h=NjZrRzJH4nvxVmTGTvMrMrPGQ03fDNYTmRNoEiNSeCQ='
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>