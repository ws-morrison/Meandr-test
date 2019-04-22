<template>
  <a href class="add-button__wrapper">
    <div class="add-button">
      <icon-union class="add-button__thumb"></icon-union>
    </div>
    <span class="add-button__caption">Заполнить анкету</span>
  </a>
</template>

<style lang="scss">
@import "../assets/scss/vars.scss";

.add-button {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  display: block;
  background-color: $primary-bg;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  position: relative;

  &__wrapper {
    display: flex;
    position: relative;
    max-width: 236px;
    margin: 0 auto;
    // margin-bottom: 125px;
    // @media (max-width: 768px) {
    //   margin-bottom: 60px;
    // }
  }
  &__thumb {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  &__caption {
    font-family: "Gilroy", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
    color: $primary-text;
    position: absolute;
    top: 18px;
    right: 30px;
  }
  &:hover {
    transition-delay: 0.9ms ease-in-out;
    width: 280px;
  }
}
</style>


<script>
import IconUnion from "./icons/IconUnion";
export default {
  name: "AddButton",
  components: {
    IconUnion
  }
};
</script>
