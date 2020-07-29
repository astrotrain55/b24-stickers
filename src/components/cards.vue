<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(sticker, index) in stickers"
        :key="sticker.icon"
        :cols="2"
      >
        <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  :src="sticker.icon"
                  :alt="sticker.title"
                  :title="sticker.title"
                  :style="{
                    width: `${sticker.size}px`,
                    minWidth: '100px',
                  }"
                ></v-img>
              </v-col>

              <v-col
                cols="auto"
                class="text-center pl-0"
              >
                <v-row
                  class="flex-column ma-0 fill-height"
                  justify="center"
                >
                  <v-col class="px-0">
                    <v-checkbox :input-value="sticker.enable"
                                @change="toggle([$event, index])"/>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState(['stickers']),
  methods: mapMutations(['toggle']),
};
</script>
