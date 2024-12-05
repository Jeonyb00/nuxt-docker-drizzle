<template>
    <div>
      <h1>게시판</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/post/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/post/new">새 글 작성</NuxtLink>
    </div>
  </template>
  
  <script setup>
  const { data: posts } = useFetch('/posts', {
    baseURL: useRuntimeConfig().public.apiBase,
  });
  </script>
  