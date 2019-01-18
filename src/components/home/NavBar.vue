<template>
  <div id="top-section">
    <div id="content">
      <!-- drugi nav -->
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="../../assets/mylogo.png" width="112" height="28">
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
          <div class="navbar-start"></div>
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
              <a class="login">
                <i class="fas fa-lock"></i>
                LOGIN
              </a>
              <button class="button sgnUpBtn" @click="sngUp" >SIGN UP</button>
            </div>
          </div>
        </div>
      </nav>

      <h1>Anthem Bunker</h1>
      <p>
        <em>Safe&nbsp;and&nbsp;Secure&nbsp;Services&nbsp;</em>
        <br>
        <em>for your most valued possessions</em>
        <br>
      </p>
      <div>
        <button type="button" class="button login-btn" @click="goToLogin">
          <i class="fas fa-lock"></i>
          LOGIN
        </button>
        <button  type="button" class="button register-btn"
        @click="goToRegister">
            <i class="fas fa-user-plus"></i>
            REGISTER
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
    },
    goToLogin() {
      window.location.href = "#";
    },
     goToRegister() {
      window.location.href = "#";
    },
    sgnUp () {
      window.location.href = "#";
    }
  },
  data() {
    return {
      isMobileMenuOpen: false
    };
  }
};
</script>

<style scoped lang="scss">
#top-section {
  background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(24, 38, 121, 0.4)),
      to(rgba(19, 31, 99, 0.8))
    ),
    url("../../assets/data-center.jpg");
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
  color: white;
  cursor: pointer;
}


#orange {
  border-radius: 8px;
  padding: 25px 32px 42px;
  margin: 5%;
  background-color: rgb(249, 168, 37);
  border-color: rgb(249, 168, 37);
  color: white;
}

#orange:hover {
  background-color: #ff8c00 !important;
}

.reg-title {
  color: white;
  text-decoration: none;
}

.sgnUpBtn {
  color: #f9a825;
  box-shadow: none;
  text-shadow: none;
  padding: 0rem 1rem;
  transition: background-color 0.25s;
  font-size: inherit;
  background-color: rgba(86, 198, 198, 0);
  display: inline;
  margin: auto;
  border: 1px solid rgb(249, 168, 37);
  border-radius: 3px;
}

.sgnUpBtn:hover {
  background-color: #f9a825;
  color: #fafafa;
}

h1 {
  font-size: 3.25rem;
  color: rgb(255, 255, 255);
  padding-top: 80px;
  text-align: center
}

p {
  color: rgb(255, 255, 255);
  color: rbg(255, 255, 255);
  padding-bottom: 20px;
  text-align: center;
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

.is-info {
  border-radius: 8px;
  padding: 25px 32px 42px;
  margin: 5%;
}

.is-info a {
  color: white;
  text-decoration: none;
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
  #top-section {
    width: 100%;
    display: block;
    padding: 10px !important;
  }

  .navbar-burger {
    border: 2px solid white;
    border-radius: 5px;
    margin: 2px;
    margin-left: 100px;
  }

  .navbar-burger span {
    color: gold;
    padding: 1px;
  }

  h1 {
    width: 100%;
  }

  .navbar-menu {
    position: absolute;
    background-color: transparent;
    left: 10px;
    top: 40px;
  }

  .dropbtn {
    color: gold;
  }

  .sgnUpBtn {
    color: gold !important;
  }

  .navbar-item a {
    color: white;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>


