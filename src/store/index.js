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
      enable: true,
    };
    initialState.push(sticker);
  });
});

export default new Vuex.Store({
  state: {
    stickers: initialState,
  },
  mutations: {
    toggle(state, [value, index]) {
      state.stickers[index].enable = !!value;
    },

    add(state, sticker) {
      state.stickers.unshift(sticker);
    },
  },
  actions: {
  },
  modules: {
  },
});
