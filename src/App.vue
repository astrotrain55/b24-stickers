<template>
  <div>
    <div>
      <img v-for="sticker in stickers"
           :key="sticker.icon"
           :src="sticker.icon"
           :alt="sticker.title"
           :title="sticker.title"
           :style="{
             width: `${sticker.size}px`,
           }"
      >
    </div>
    <AppCards/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppCards from './components/cards.vue';

export default {
  components: {
    AppCards,
  },

  computed: mapState(['stickers']),
};
</script>
