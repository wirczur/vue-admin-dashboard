<template>
  <div id="app" class="background-silver">
    <vue-snotify></vue-snotify>
    <div class="fixed-top color-setting background-white border-black" >
      <div class="p-0" style="padding: 10px;">
        <div v-if="!colorSetting">
          <b-button variant="link" @click="colorSetting = !colorSetting">
            <font-awesome-icon icon="arrow-left" />
          </b-button>
        </div>
        <div v-else>
          <b-button variant="link" @click="colorSetting = !colorSetting">
            <font-awesome-icon icon="arrow-right" />
          </b-button>
          <b-button-group size="lg" class="mr-2">
            <b-button
              size="mini"
              v-for="(item, index) in getClassesList"
              :key="index"
              v-bind:class="item"
              @click="changeActiveClass(index)"
            />
          </b-button-group>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      colorSetting: false,
    };
  },
  mounted() {
    this.$snotify.setDefaults({
      global: {
        newOnTop: true,
        maxAtPosition: 3,
        maxOnScreen: 3,
        oneAtTime: false,
        preventDuplicates: true,
      }
    });
  },
  computed: {
    getClassesList() {
      return this.$store.getters.getClassesList;
    },
    getActiveClass() {
      return this.$store.getters.getActiveClass;
    },
  },
  methods: {
    ...mapActions([
      'changeActiveClass',
    ]),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
