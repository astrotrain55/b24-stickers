<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>b24-stickers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2"
             color="indigo"
             tile
             @click="dialog = true"
      >
        <v-icon>mdi-plus</v-icon>
        Добавить стикер
      </v-btn>
      <v-btn class="ma-2"
             color="indigo"
             tile
             @click="clipboard"
      >
        Копировать код
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <AppCards/>
            <AppCode ref="code"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-form>
                  <v-text-field
                    v-model="newSticker.url"
                    label="url"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="newSticker.size"
                    :label="newSticker.sizeDefault"
                  ></v-text-field>
                  <v-text-field
                    v-model="newSticker.title"
                    :label="newSticker.titleDefault"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" text @click="addSticker">Добавить стикер</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';
import copy from 'copy-to-clipboard';
import AppCards from './components/cards.vue';
import AppCode from './components/code.vue';

export default {
  components: {
    AppCards,
    AppCode,
  },

  data: () => ({
    dialog: false,
    newSticker: {
      url: '',
      size: '',
      sizeDefault: '100',
      title: '',
      titleDefault: 'Noname Sticker',
    },
  }),

  methods: {
    ...mapMutations(['add']),

    addSticker() {
      this.add({
        enable: true,
        icon: this.newSticker.url,
        size: this.newSticker.size || this.newSticker.sizeDefault,
        title: this.newSticker.title || this.newSticker.titleDefault,
      });

      this.dialog = false;
    },

    clipboard() {
      copy(this.$refs.code.$el.textContent);
    },
  },
};
</script>
