<template>
  <section class="features container">
    <h2 class="features__title">Приемущества работы с нами</h2>
    <div class="features__wrapper">
      <features-item
        :featuresState="item"
        :key="featuresState.item"
        v-for="(item, featuresState) in featuresState"
      ></features-item>
    </div>
  </section>
</template>

<script>
import FeaturesItem from "./FeaturesItem";
export default {
  name: "Features",
  components: {
    FeaturesItem
  },
  data() {
    return {
      featuresState: [
        // store
        {
          item: {
            img: "./static/img/icons/features-icon.png",
            title: "Делимся опытом и навыками",
            text:
              "Мы обучаем коллег всему, что знаем сами. Наш опыт уникален и проверен временем, а команда постоянно совершенствует свои знания и навыки."
          }
        },
        {
          item: {
            img: "./static/img/icons/features-icon.png",
            title: "Стабильная зарплата",
            text:
              "Вы без задержек получаете официальную зарплату. Также мы оплачиваем больничные и даем возможность брать оплачиваемый отпуск до 4 недель в год."
          }
        },
        {
          item: {
            img: "./static/img/icons/features-icon.png",
            title: "Гибкий график",
            text:
              "Мы умеем работать с теми, кто еще не закончил получать образование. Вы можете работать неполный рабочий день, брать отгулы на время сессии и диплома."
          }
        }
      ]
    };
  }
};
</script>


<style lang="scss">
@import "../assets/scss/vars.scss";
.features {
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: $primary-bg;
  @media (max-width: $tablet) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__title {
    margin: 0;
    text-align: center;
    font-family: "DIN Pro", Arial, Helvetica, sans-serif;
    font-size: $font-size-3xl;
    line-height: normal;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 60px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: $tablet) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
