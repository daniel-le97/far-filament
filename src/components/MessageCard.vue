<template>
  <div class="component">
    {{ message }}
    <button @click="changeMessage">click</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { AppState } from "../AppState";
import { messageService } from "../services/MessageService"

const message = computed(() => AppState.message);
const changeMessage = async() => {
  try {
      await messageService.changeMessage()
    } catch (error) {
    }
}
</script>

<style lang="scss" scoped></style>
