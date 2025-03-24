<template>
  <main>
    <TopNav />
    <Home />
    <History />
    <Contract />
  </main>
</template>

<script setup lang="ts">
import { TopNav } from '@/layout';
import { Home, History, Contract } from '@/views';
</script>

<style scoped></style>
