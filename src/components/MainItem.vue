<template>
  <div class="main-item">
    <h3 class="main-item__title">{{mainState.item.title}}</h3>
    <p class="main-item__text">{{mainState.item.text}}</p>
  </div>
</template>


<script>
export default {
  name: "MainItem",
  props: {
    mainState: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/vars.scss";
@import "../assets/scss/fonts.scss";

.main-item {
  font-family: "DIN Pro", Arial, Helvetica, sans-serif;
  background-color: white;

  // border: 1px solid lightgrey;
  //   width: 365px;

  border: none;
  box-shadow: 0px 0px 1px 1px #ededed;

  padding-top: 50px;
  padding-left: 60px;

  padding-bottom: 60px;
  padding-right: 60px;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-content: baseline;
  align-items: flex-start;
  max-width: 485px;
  width: 100%;
  box-sizing: border-box;

  &__title {
    margin: 0;

    font-family: "DIN Pro", Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $accient;

    margin-bottom: 12px;
  }
  &__text {
    margin: 0;
    font-size: 24px;
    line-height: normal;
    letter-spacing: -0.03em;
    color: $primary-text;
  }
  @media (max-width: 986px) {
    margin-bottom: 15px;
  }
}

/* стили только для IE10 и IE11 */
@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .main-item {
    min-height: 100%;
    display: block;
    padding-top: 50px;
    padding-bottom: 60px;
  }
}
</style>
