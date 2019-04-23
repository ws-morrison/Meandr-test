<template>
  <section class="blank">
    <div class="container">
      <h2 class="blank__title">Теперь расскажите о себе</h2>

      <form class="form" id="blank-form" @submit="checkForm" action="#" method="post">
        <!-- Фамилия и имя -->
        <!-- required -->
        <label class="form__label" for="name">
          <span class="form__input-title">
            <span class="input-thumb">1</span>
            Фамилия и имя
          </span>
          <input
            class="form__input"
            id="form-name"
            type="text"
            for="name"
            v-model="name"
            placeholder="Сидоров Александр"
          >
        </label>

        <!-- Электронная почта -->
        <!-- required -->
        <label class="form__label" for="email">
          <span class="form__input-title">
            <span class="input-thumb">2</span>
            Электронная почта
          </span>
          <input
            class="form__input"
            id="form-email"
            type="email"
            for="email"
            v-model="email"
            placeholder="Sidorov@yandex.ru"
          >
        </label>

        <!-- Телефон -->
        <!-- required -->
        <label class="form__label" for="telephone">
          <span class="form__input-title">
            <span class="input-thumb">3</span>
            Телефон
          </span>
          <input
            class="form__input"
            id="form-tel"
            type="tel"
            for="telephone"
            v-model="telephone"
            placeholder="+7 (999)-328-14-20"
          >
        </label>

        <!-- Сообщение -->
        <label class="form__label" for="message">
          <span class="form__input-title">
            <span class="input-thumb">4</span>
            Какой деятельностью, не связанной с текущими проектами, вы бы хотели заниматься в рабочее время?
          </span>
          <textarea
            class="form__input"
            name
            id="form-msg"
            cols="30"
            rows="2"
            placeholder="Свой проект по созданию универсальной инфраструктуры строительства"
          ></textarea>
        </label>
        <div class="errors" v-if="errors.length">
          <b class="errors__caption">Пожалуйста исправьте указанные ошибки:</b>
          <ul class="errors__list">
            <li class="errors__item" v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <button type="submit" class="form__button">Отправить</button>
      </form>
    </div>
  </section>
</template>


<script>
export default {
  name: "TheForm",

  data() {
    return {
      errors: [],
      name: null,
      email: null,
      telephone: null,
      ERR_NAME: "Как вас зовут?",
      ERR_EMAIL: "Укажите email-адрес.",
      ERR_TEL: "Укажите телефон в формате +71234567890"
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.name && this.email && this.telephone) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push(this.ERR_NAME);
      }
      if (!this.email) {
        this.errors.push(this.ERR_EMAIL);
      }
      if (!this.telephone) {
        this.errors.push(this.ERR_TEL);
      }
      e.preventDefault();
    }
  }
};
</script>


<style lang="scss">
@import "../assets/scss/vars.scss";
@import "../assets/scss/fonts.scss";
@import "../assets/scss/commons.scss";

.blank {
  padding-top: 100px;
  padding-bottom: 120px;
  background-color: $secondary-bg;
  color: #fff;
  @media (max-width: $tablet) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__title {
    margin: 0;
    text-align: center;
    font-family: $primary-light;
    font-weight: 300;
    font-size: $font-size-3xl;
    line-height: normal;
    text-align: center;
    letter-spacing: -0.02em;
    margin-bottom: 60px;
    color: #fff;
    @media (max-width: $tablet) {
      font-size: $font-size-desktop-xl;
    }
  }
}

.form {
  max-width: 575px;
  display: block;
  margin: 0 auto;
  &__input-title {
    font-family: $primary-medium;
    font-size: $font-size-s;
    line-height: 25px;
    letter-spacing: -0.01em;
    color: #ffffff;
    display: block;
    position: relative;
  }

  &__input {
    width: 100%;
    font-family: $additional;
    font-size: $font-size-desktop-m;
    line-height: 35px;
    letter-spacing: -0.01em;
    padding-top: 12px;
    padding-bottom: 24px;
    color: #ffffff;
    opacity: 0.3;
    background-color: $secondary-bg;
    border: none;
    border-bottom: 2px solid rgba(247, 248, 250, 0.1);
    margin-bottom: 48px;
  }
  &__button {
    border: none;
    margin: 0 auto;
    margin-top: 12px;
    font-family: $secondary-bold;
    font-size: $font-size-ms;
    line-height: normal;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $accient;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    max-width: 575px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    border-radius: 111px;
    &:hover {
      background-color: $accient;
      color: #fff;
      transition: 0.2s linear;
      cursor: pointer;
    }
  }
}

.errors {
  &__caption {
    font-family: $primary-medium;
    font-size: $font-size-s;
  }
  &__list {
    list-style: none;
  }
  &__item {
    text-decoration: underline;
    font-family: $primary;
    font-size: $font-size-ms;
    line-height: 25px;
    letter-spacing: -0.01em;
  }
}

.input-thumb {
  content: "1";
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border: 1px solid rgba(247, 248, 250, 0.23);
  border-radius: 100px;
  font-family: $additional;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  text-align: center;
  color: $accient;
  left: -100px;
  top: -20px;

  @media (max-width: 900px) {
    display: none;
  }
}
</style>
