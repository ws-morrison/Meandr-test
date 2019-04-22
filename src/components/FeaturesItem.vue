<template>
  <div class="features-item">
    <div class="features-item__img-wrapper">
      <img :src="featuresState.item.img" alt class="features-item__img">
    </div>
    <h3 class="features-item__title">{{featuresState.item.title}}</h3>
    <span class="features-item__thumb"></span>
    <p class="features-item__text">{{featuresState.item.text}}</p>
  </div>
</template>


<script>
export default {
  name: "FeaturesItem",
  props: {
    featuresState: {
      type: Object
    }
  }
};
</script>


<style lang="scss">
@import "../assets/scss/vars.scss";
@import "../assets/scss/commons.scss";
.features-item {
    max-width: 320px;
  margin-bottom: 40px;

  padding-left: 20px;
  padding-right: 20px;
  &__title {
    font-family: "DIN Pro", Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: normal;
    color: #000000;
    margin: 0;
    margin-bottom: 22px;
  }
  &__text {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin: 0;

    color: #4e4d53;
  }
  &__thumb {
    display: block;
    width: 24px;
    height: 2px;
    background-color: $accient;
    margin-bottom: 27px;
  }
  &__img-wrapper {
    width: 52px;
    height: 52px;
    margin-bottom: 30px;
  }
}
</style>
