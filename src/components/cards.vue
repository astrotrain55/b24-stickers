<template>
  <ul>
    <li v-for="sticker in stickers" :key="sticker.icon">
      [icon={{sticker.icon}} size={{sticker.size}} title={{sticker.title}}]
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['stickers']),
};
</script>
