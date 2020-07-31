<template>
  <code>
    <span v-for="sticker in enabledStickers" :key="sticker.icon">
      [icon={{sticker.icon}} size={{sticker.size}} title={{sticker.title}}]
    </span>
  </code>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['enabledStickers']),
};
</script>
