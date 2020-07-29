import Vue from 'vue';
import Vuex from 'vuex';
import _ from '@/modules/lodash';
import stickers from '@/stickers';

Vue.use(Vuex);

const initialState = [];

_.each(stickers, (pack) => {
  _.each(pack, (stickerOld) => {
    const sticker = {
      ...stickerOld,
      size: stickerOld.size || 100,
    };
    initialState.push(sticker);
  });
});

export default new Vuex.Store({
  state: {
    stickers: initialState,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
