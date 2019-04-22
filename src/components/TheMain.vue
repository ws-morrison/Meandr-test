<template>
  <main class="main">
    <!-- :style="{ backgroundImage: 'url(' + backgroundImg + ')' }" -->
    <div class="main-background">
      <img class="main-background__img" :src="backgroundImg" alt>
      <div class="main__wrapper">
        <main-item :mainState="item" :key="mainState.item" v-for="(item, mainState) in mainState"></main-item>
      </div>
    </div>
    <about-us></about-us>
    <features></features>
    <the-form></the-form>
  </main>
</template>


<script>
import MainItem from "./MainItem";
import AboutUs from "./AboutUs";
import Features from "./Features";
import TheForm from './TheForm'
export default {
  name: "TheMain",
  components: {
    MainItem,
    AboutUs,
    Features,
    TheForm
  },
  data() {
    return {
      backgroundImg: "./static/img/main-bg.jpg",
      mainState: [
        // store
        {
          item: {
            title: "Прокачиваем мир",
            text:
              "Вы хотите сделать мир лучше и не готовы ждать всю жизнь, чтобы начать это делать?"
          }
        },
        {
          item: {
            title: "Мотивируем себя",
            text:
              "У вас есть собственная цель и вы не боитесь много работать, чтобы её достичь?"
          }
        },
        {
          item: {
            title: "Используем лучшее",
            text:
              "Вы способны применять разные подходы для достижения своих целей?"
          }
        },
        {
          item: {
            title: "Относимся с пониманием",
            text:
              "Вы не обвиняете других в свои неудачах и способны воспринимать критику?"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars.scss";
.main {
  max-width: 1440px;
  margin: 0 auto;

  &__wrapper {
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;

    justify-content: center;

    position: relative;
    top: -5vw;
    // top: -103px;
    @media (max-width: 768px) {
      top: 0;
    }
  }
}
.main-background {
  position: relative;
  background-color: $primary-bg;
  &__img {
    @media (max-width: 768px) {
      display: none;
    }
  }
}

/* стили только для IE10 и IE11 */
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .main {
    display: block;
    margin: 0 auto;
    max-width: 1440px;
    &__wrapper {
      display: flex;
      max-width: 1024px;
      margin: 0 auto;
    }
  }
}
</style>
