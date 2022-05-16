<script>
import { useStore } from "@/store/game";

export default {
  setup() {
    const gameStore = useStore();
    return { gameStore };
  },

  data() {
    return {
      alive: this.gameStore.player.alive,
      dead: !this.alive,
    };
  },
};
</script>
<template>
  <div
    class="bg-slate-700 absolute w-full h-screen flex flex-col justify-center items-center"
  >
    <div>
      <canvas id="canvas" width="360" height="600"></canvas>
    </div>

    <div id="score" class="mt-10 text-pink-500 text-3xl">
      {{ gameStore.player.score }}
    </div>

    <div>
      {{ gameStore.time }}
    </div>
  </div>
</template>
