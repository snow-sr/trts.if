<script>
/*
 #######  ######   #######   #####        ###  #######
    #     #     #     #     #     #        #   #
    #     #     #     #     #              #   #
    #     ######      #      #####         #   #####
    #     #   #       #           #  ###   #   #
    #     #    #      #     #     #  ###   #   #
    #     #     #     #      #####   ###  ###  #

    Um projeto desenvolvido por: João Felipi Cardoso & Davi Gabriel Tomaz
*/
import gameComponent from "../components/gameComponent.vue";
import navbarComponent from "../components/navbarComponent.vue";

export default {
  mounted() {
    import("@/services/play.js");
  },
  components: {
    gameComponent,
    navbarComponent,
  },
};
</script>

<template>
  <div>
    <navbar-component />
    <!--AREA DO GAME-->
    <gameComponent />
    <!--AREA DO GAME-->
  </div>
</template>
