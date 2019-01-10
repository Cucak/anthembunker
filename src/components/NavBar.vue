<template>
  <div id="top-section">
    <div id="content">
      <!-- drugi nav -->
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="../assets/mylogo.png" width="112" height="28">
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isMobileMenuOpen}">
            <div class="navbar-start">

            </div>
          <div class="navbar-end">
            <b-dropdown hoverable>
              <button class="dropbtn" slot="trigger">
                <span>Departments</span>
              </button>
              <b-dropdown-item>
                <a href="https://www.anthemvault.com/" class="reversed">Anthem Vault</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.amagimetals.com/" class="reversed">Amagi Metals</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.anthemgold.com/" class="reversed">AnthemGold</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.anthemgold.com/" class="reversed">Anthem Vault</a>
              </b-dropdown-item>
              <b-dropdown-item>
                <a href="https://www.anthemgold.com/" class="reversed">AnthemNationalReserve</a>
              </b-dropdown-item>
            </b-dropdown>
            <div class="navbar-item">
              <a class="login" style="color:white; cursor: pointer;">
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="lock"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 515"
                  class="svg-inline-fa fa-lock fa-w-14 fa-sm"
                >
                  <path
                    data-v-6a0c902d
                    fill="currentColor"
                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                    class
                  ></path>
                </svg>
                LOGIN
              </a>
              <a
                role="button"
                class="sgnUpBtn"
                style="border:1px solid rgb(249, 168, 37); border-radius: 3px;"
              >SIGN UP</a>
            </div>
          </div>
        </div>
      </nav>

      <h1
        class="text-center"
        style="font-size: 3.25rem; color: rgb(255, 255, 255); padding-top: 80px;"
      >Anthem Bunker</h1>
      <p class="text-center" style="color: rbg(255, 255, 255);padding-bottom: 20px;">
        <em>Safe&nbsp;and&nbsp;Secure&nbsp;Services&nbsp;</em>
        <br>
        <em>for your most valued possessions</em>
        <br>
      </p>
      <div style="text-align: center;">
        <button
          type="button"
          class="button is-info"
          style="border-radius: 8px;  padding: 25px 32px 42px; margin: 5%;"
        >
          <a data-v-6a0c902d style="color: white; text-decoration: none;">
            <svg
              data-v-6a0c902d
              aria-hidden="true"
              data-prefix="fas"
              data-icon="lock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-lock fa-w-14 fa-sm"
            >
              <path
                fill="currentColor"
                d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                class
              ></path>
            </svg>
            LOGIN
          </a>
        </button>
        <button
          id="orange"
          type="button"
          class="button"
          style="border-radius: 8px; padding: 25px 32px 42px; margin: 5%; background-color: rgb(249, 168, 37); border-color: rgb(249, 168, 37);"
        >
          <a style="color: white; text-decoration: none;">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="user-plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="svg-inline--fa fa-user-plus fa-w-20 fa-sm"
            >
              <path
                fill="currentColor"
                d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                class
              ></path>
            </svg>
            REGISTER
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      if (this.isMobileMenuOpen) {
        this.toggleMobileMenu();
      }
    }
  },
  data() {
    return {
      isMobileMenuOpen: false
    };
  }
};
</script>

<style scoped>
#top-section {
  background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(24, 38, 121, 0.4)),
      to(rgba(19, 31, 99, 0.8))
    ),
    url("../assets/data-center.jpg");
  padding: 50px;
}
#content {
  max-width: 1080px;
  margin: auto;
}
nav {
  background-color: transparent !important;
  padding-left: 5%;
  padding-right: 5%;
}

.navbar-item img {
  max-height: 2.6rem;
}
img {
  width: 183px;
  vertical-align: middle;
  border-style: none;
}
.navbar-start {
  margin: auto;
}
a {
  font-size: 16px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;

  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.dropbtn::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fafafa;
  min-width: 160px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 2px;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #fafafa;
  color: #f9a825;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: #f9a825;
}

.login {
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;
}
#orange:hover {
  background-color: #ff8c00 !important;
}
svg {
  width: 10px;
  height: 10px;
}
.sgnUpBtn {
  color: #f9a825;
  box-shadow: none;
  text-shadow: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.25s;
  font-size: inherit;
  background-color: rgba(86, 198, 198, 0);
  display: inline;
  margin: auto;
}
.sgnUpBtn:hover {
  background-color: #f9a825;
  color: #fafafa;
}
.text-center {
  text-align: center !important;
}
p.text-center {
  color: rgb(255, 255, 255);
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  display: block;
}
.warnBtn:hover {
  background-color: darkorange;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #top-sect-section {
    width: 100%;
    display: block;
  }
  .navbar-burger {
    margin-left: -3.25rem;
    cursor: pointer;

    height: 3.25rem;
    position: relative;

    margin: 20px auto;
  }
}
/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>


