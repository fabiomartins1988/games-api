<template>
  <div class="header">
    <a href="#default" class="logo">games-api</a>
    <div class="header-right">
      <a href="#home">Home</a>
      <a href="https://github.com/fabiomartins1988/games-api" target="_blank">Github</a>
      <a href="#about">About</a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 1rem 3rem;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
  color: blueviolet
}

.header a:hover {
  color: gray;
}

.header a.active {
  color: blueviolet;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>