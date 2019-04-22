<template>
  <header class="header">
    <div class="heading container">
      <h1 class="heading__title">Ты готов стать профессионалом?</h1>
      <p class="heading__caption">
        Мы ищем
        <span class="heading__caption heading__caption--accient">талантов</span> и
        <span class="heading__caption heading__caption--accient">саппортов</span> в команду. Решите на какую категорию вы претендуете.
      </p>
    </div>
    <add-button></add-button>
  </header>
</template>


<script>
import AddButton from "./AddButton";
export default {
  name: "TheHeader",
  components: {
    AddButton
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars.scss";
@import "../assets/scss/commons.scss";

.header {
  padding-top: 140px;
  // display: flex;
  // flex-direction: column;
  display: block;

  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding-top: 60px;

    padding-bottom: 60px;
  }
}
.heading {
  display: block;
  // width: 100%;
  margin: 0 auto;
  text-align: center;
  &__title {
    font-family: "DIN Pro", Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -0.02em;
    color: $primary-text;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      font-weight: 500;
      font-size: 28px;
      line-height: normal;
      letter-spacing: normal;
    }
  }
  &__caption {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: $secondary-text;

    margin-bottom: 30px;
    &--accient {
      color: $accient;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: normal;
    }
  }
}
</style>
