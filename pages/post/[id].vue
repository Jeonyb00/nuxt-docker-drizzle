<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <NuxtLink to="/">← 목록으로 돌아가기</NuxtLink>
  </div>
  <div v-else>
    <p v-if="error">{{ error }}</p>
    <p v-else>게시글을 불러오는 중입니다...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const { data } = await useFetch(`/posts/${route.params.id}`, {
      baseURL: useRuntimeConfig().public.apiBase,
    });
    post.value = data.value;
  } catch (err) {
    error.value = '게시글을 불러오는데 실패했습니다.';
    console.error(err);
  }
});
</script>
