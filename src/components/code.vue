<template>
  <code>
    <template v-for="sticker in enabledStickers">
      <span :key="sticker.icon">
        [icon={{sticker.icon}} size={{sticker.size}} title={{sticker.title}}]
      </span>
    </template>
  </code>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['stickers']),

    enabledStickers() {
      return this.stickers.filter((s) => s.enable);
    },
  },
};
</script>
