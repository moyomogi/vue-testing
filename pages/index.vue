<template>
  <div class="container">
    <head>
      <meta property="og:title" content="Vue Testing"/>
      <meta property="og:description" content="Vue.js のテスト。"/>
      <meta property="og:image" content="https://i.imgur.com/yHdEbDN.png"/>
    </head>
    <!-- <img class="logo" src="~/static/arona.png"> -->
    <img class="logo" src="https://i.imgur.com/yHdEbDN.png">
    <router-link class="routerLink" to="/">
      <h1 class="title">Vue Testing</h1>
    </router-link>

    <p class="subtitle">テスト。</p>
    <div class="buttons">
      <o-button root-class="button" variant-class="button-" variant="light" @click="goToGithub()">
        GitHub
      </o-button>
      <o-button root-class="button" variant-class="button-" variant="dark" @click="goToCommits()">
        Commits
      </o-button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'HomePage',
  methods: {
    goToGithub () {
      // @ts-ignore
      window.location = 'https://github.com/moyomogi/web';
    },
    goToCommits () {
      // @ts-ignore
      window.location = 'https://github.com/moyomogi/web/commits/master'
    }
  }
}

</script>


<style>
.container {
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.logo {
  max-width: 240px;
}

.routerLink {
  text-decoration: none;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 200;
  font-size: 60px;
  color: #5facff;
  letter-spacing: 1px;
  text-decoration: none;
}
.subtitle {
  font-weight: 200;
  font-size: 20px;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 24px;
}

.o-button {
  padding: 10px 20px;
}
.buttons {
  padding-top: 9px;
}
.button {
  padding: 9px;
  min-width: 130px;
}
.button-light {
  background-color: #3cb1c5;
}
.button-dark {
  background-color: #293923;
}

</style>
