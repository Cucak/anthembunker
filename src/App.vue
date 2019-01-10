<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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

</style>
