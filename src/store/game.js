import { defineStore } from "pinia";

export const useStore = defineStore("game", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      player: {},
    };
  },
  actions: {
    setPlayer(player) {
      this.player = player;
    },
    setGameTime(time) {
      this.time = time;
    },
  },
});
