<template>
  <div class="login d-flex flex-column align-content-center justify-content-center">
    <b-container class="d-flex flex-column align-content-center justify-content-center">
      <b-container class="login">
        <b-card class="mb-2">
          <h3>Pass to login</h3>
          Username - test<br>
          Password - any
        </b-card>
        <b-card-group>
          <b-card v-bind:class="getActiveClass">
            <img alt="Vue logo" src="@/assets/logo.png" >
          </b-card>
          <b-card
            class="d-flex flex-column align-content-center justify-content-center"
          >
            <b-form
              @submit="onSubmit"
            >
              <b-form-group id="exampleInputGroup2"
                label=""
                label-for=""
              >
                <b-form-input v-model="form.username" placeholder="Username" />
              </b-form-group>
              <b-form-group id="exampleInputGroup2"
                label=""
                label-for=""
              >
                <b-form-input v-model="form.password" placeholder="Password" />
              </b-form-group>
              <b-form-group id="exampleInputGroup2"
                label=""
                label-for=""
              >
                <b-button
                  native-type="submit"
                  type="info"
                  class="uk-width-1-1"
                  v-bind:class="getActiveClass"
                  :loading="false"
                >
                  Sign in
                </b-button>
              </b-form-group>
            </b-form>
          </b-card>
        </b-card-group>
      </b-container>
      <div class="uk-inline fixed-bottom uk-position-bottom">
        <b-card class="login-footer text-right">
          created by wirczur
        </b-card>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  computed: {
    getActiveClass() {
      return this.$store.getters.getActiveClass;
    },
  },
  methods: {
    onSubmit(element) {
      element.preventDefault();

      const valide = this.$store.dispatch('SignInUser', this.form)

      valide  
        .then((response) => {
          this.$snotify.success(response, {
            position: 'centerTop',
            showProgressBar: false
          });
          this.$router.push({ path: 'home' });
          
        })
        .catch((error) => {
          this.$snotify.error(error.message, {
            position: 'centerTop',
            showProgressBar: false
          });
        });
    },
  },
};

</script>
