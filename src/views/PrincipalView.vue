<script>
import Leaderboard from "@/components/LrbdsComponent.vue";
import Jogos from "@/components/JogosComponent.vue";
import navbar from "@/components/navbarComponent.vue";

export default {
  components: { Leaderboard, Jogos, navbar},
};
</script>

<template>
   <navbar/>
  <main class="bg-slate-700 h-screen flex justify-center items-center">
      
    <div class="grid grid-cols-2">
      <div>
        <leaderboard />
      </div>
      <div>
        <Jogos />
      </div>
    </div>
  </main>
</template>
