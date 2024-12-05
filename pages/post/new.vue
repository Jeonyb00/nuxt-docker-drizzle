<template>
  <div>
    <h1>새 글 작성</h1>
    <form @submit.prevent="createPost">
      <div>
        <label>제목:</label>
        <input v-model="form.title" required />
      </div>
      <div>
        <label>내용:</label>
        <textarea v-model="form.content" required></textarea>
      </div>
      <button type="submit" :disabled="loading">저장</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({ title: '', content: '' });
const loading = ref(false);
const error = ref(null);

const createPost = async () => {
  loading.value = true;
  error.value = null;

  try {
    const { data } = await useFetch('/posts', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'POST',
      body: form.value,
    });
    console.log(data.value); // 성공 메시지 출력
    router.push('/');
  } catch (err) {
    error.value = '게시글 저장 중 문제가 발생했습니다.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>
