<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import './../node_modules/bulma/css/bulma.css';
@import url("https://fonts.googleapis.com/css?family=Montserrat");


// set your colors
    $blue: #007bff;
    $indigo: #6610f2;
    $purple: #6f42c1;
    $pink: #e83e8c;
    $red: #dc3545;
    $orange: #fd7e14;
    $yellow: #ffc107;
    $green: #28a745;
    $teal: #20c997;
    $cyan: #17a2b8;
    $white: #fff;
    $gray: #6c757d;
    $gray-dark: #343a40;
    $primary: #007bff;
    $secondary: #6c757d;
    $success: #28a745;
    $info: #17a2b8;
    $warning: #ffc107;
    $danger: #dc3545;
    $light: #f8f9fa;
    $dark: #343a40;
    // breakpoints 
    $breakpoint-xs: 0;
    $breakpoint-sm: 576px;
    $breakpoint-md: 768px;
    $breakpoint-lg: 992px;
    $breakpoint-xl: 1200px;
    $font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    $font-family-monospace:  SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

.btn-to-top {
  width: 40px;
  height: 40px;
  border-color: gold;
  background-color: transparent;
  color: gold;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
}

.btn-to-top:hover {
  box-shadow: 0px 12px 18px -6px #000;
  background-color: gold;
  color: black;
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  font-size: 16px !important;
}

h1 {
  font-size: 40px !important;
}

h2 {
  font-size: 32px !important;
}

h3 {
  font-size: 28px !important;
}

h4 {
  font-size: 24px !important;
}

h5 {
  font-size: 20px !important;
}

h6 {
  font-size: 16px !important;
}

i {
  padding: 1%;
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
.btn-to-top {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
}
</style>
