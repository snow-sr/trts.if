<script>
import Leaderboard from "@/components/LrbdsComponent.vue";
// import Jogos from "@/components/JogosComponent.vue";
import navbar from "@/components/navbarComponent.vue";

export default {
  components: { Leaderboard, navbar },
};
</script>

<template>
  <navbar />
  <main class="bg-slate-700 h-screen flex justify-center items-center">
    <div>
      <div>
        <leaderboard />
      </div>
    </div>
  </main>
</template>
