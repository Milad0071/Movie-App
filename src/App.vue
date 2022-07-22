<template>
  <v-app>
      <HeaderView />
      <v-main>
        <router-view/>
      </v-main>
    
  </v-app>
</template>

<script>
import HeaderView from './views/layout/header/HeaderView.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { HeaderView }
};
</script>
