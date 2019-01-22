<template>
  <div id="slider-section">
    <div id="content" style>
      <div
        id="small-header-carousel"
      >
        <span id="small-labelcarousel">As featured in...</span>
      </div>
      <carousel
        class="carousel"
        autoplay
        :per-page="4"
        :pagination-enabled="false"
        :scroll-per-page="false"
        :loop="true"
      >
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/aol.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/bing.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/bloomberg.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/bloombergbusiness.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/bloombergtv.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/bloombergview.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/businessreport.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/cnbc.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/drdave.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/fastmarkets.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/foxbusiness.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/google.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/internationalbusiness.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/JayTaylor.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/marketwatch.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/msn.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/reuters.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/sina.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/swann.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/thestreet.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/usnews.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/wrko.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/wsj.png">
          </a>
        </slide>
        <slide class="slide-container">
          <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
            <img class="imgSize" src="../../assets/logos/yahoo.png">
          </a>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "VueSlide",
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss" scoped>
#slider-section {
  padding: 50px;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#small-header-carousel {
font-style: italic; 
color: $bunker-gray; 
text-align: center; 
font-size: 20px; 
padding-bottom: 10px; 
width: 100%;
}

.carousel {
  padding-top: 2%;
  padding-bottom: 5%;
}

.imgSize {
  width: 70%;
  margin: auto;
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
  .imgSize {
    width: 100%;
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
  #slider-section {
    padding: 30px;
    padding-bottom: 10px;
  }

  .imgSize {
    width: 160px;
    height: 58px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>



