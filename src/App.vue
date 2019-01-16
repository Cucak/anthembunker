<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import './../node_modules/bulma/css/bulma.css';

@import url("https://fonts.googleapis.com/css?family=Montserrat");

body {
  background-color: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1,5;
  color: #212529;
  text-align: left;
  
}

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
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
.btn-to-top {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
}
</style>
