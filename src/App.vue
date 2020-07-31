<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>b24-stickers</v-toolbar-title>
      <v-spacer/>
      <v-btn v-if="enabledStickers.length"
             class="ma-2"
             color="indigo"
             tile
             @click="dialogCode = true"
      >
        Копировать код
      </v-btn>
      <v-btn class="ma-2"
             color="indigo"
             tile
             @click="dialogAdd = true"
      >
        <v-icon>mdi-plus</v-icon>
        Добавить стикер
      </v-btn>
      <v-checkbox
        label="Выделить всё"
        :input-value="true"
        :indeterminate="isChecked"
        :style="{
          marginTop: '25px',
        }"
        @change="toggleAll"
      />
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
          <v-col>
            <AppCards class="text-center"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppPopup
      :open="dialogCode"
      width=""
      :successFunction="clipboard"
      successText="Копировать код"
      @popup:close="dialogCode = false"
    >
      <AppCode ref="code"/>
    </AppPopup>
    <AppPopup
      :open="dialogAdd"
      width="300px"
      :successFunction="addSticker"
      successText="Добавить стикер"
      @popup:close="dialogAdd = false"
    >
      <v-form>
        <v-text-field
          v-model="newSticker.url"
          label="Адрес"
          required
        ></v-text-field>
        <v-text-field
          v-model="newSticker.size"
          label="Размер"
        ></v-text-field>
        <v-text-field
          v-model="newSticker.title"
          label="Описание"
        ></v-text-field>
      </v-form>
    </AppPopup>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import copy from 'copy-to-clipboard';
import AppCards from './components/cards.vue';
import AppCode from './components/code.vue';
import AppPopup from './components/popup.vue';

export default {
  components: {
    AppCards,
    AppCode,
    AppPopup,
  },

  data: () => ({
    dialogAdd: false,
    dialogCode: false,
    newSticker: {
      url: '',
      size: '',
      title: '',
    },
  }),

  computed: {
    ...mapState(['stickers']),
    ...mapGetters(['enabledStickers']),

    isChecked() {
      const count = this.stickers.length;
      const countEnabled = this.enabledStickers.length;
      return countEnabled > 0 && countEnabled !== count;
    },
  },

  methods: {
    ...mapMutations(['add', 'toggleAll']),

    addSticker() {
      this.add({
        enable: true,
        icon: this.newSticker.url,
        size: this.newSticker.size || 100,
        title: this.newSticker.title || 'Noname Sticker',
      });

      this.dialogAdd = false;
    },

    clipboard() {
      copy(this.$refs.code.$el.textContent);
      this.dialogCode = false;
    },
  },
};
</script>
