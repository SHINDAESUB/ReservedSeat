<template>
  <v-app>
    <v-main class="test">
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },
  mounted(){
    this.$store.dispatch('getSeatsList')
  },

  data: () => ({
    //
  }),

  

};
</script>
<style>

.test{
  background-color:  #F9F2E7;
}

</style>