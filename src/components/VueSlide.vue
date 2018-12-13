<template>
<div id="slider-section">
    <div id="content">
<carousel
            class="carousel"
            autoplay
            :per-page="4"
            :pagination-enabled="false"
            :scroll-per-page="false"
            :loop="true">
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/aol.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/bing.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/bloomberg.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/bloombergbusiness.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/bloombergtv.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/bloombergview.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/businessreport.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/cnbc.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/drdave.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/fastmarkets.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/foxbusiness.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/google.png">
            </a>
          </slide><slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/internationalbusiness.png">
            </a>
          </slide><slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/JayTaylor.png">
            </a>
          </slide><slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/marketwatch.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/msn.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/reuters.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/sina.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/swann.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/thestreet.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/usnews.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/wrko.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/wsj.png">
            </a>
          </slide>
          <slide class="slide-container">
            <a href="https://www.idax.mn/#/register?inviteCode=z8vqob" target="_blank">
              <img class="imgSize" src="../assets/logos/yahoo.png">
            </a>
          </slide>
      </carousel>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: 'VueSlide',
     components: {
     Carousel,
     Slide
     }
}
</script>

<style lang="scss" scoped>
#slider-section {
  padding: 50px;
}

#content {
  max-width: 1080px;
  margin: auto;
}
.carousel {
  padding-top: 2%;
  padding-bottom: 5%;
}
.imgSize {
  width: 60%;
  margin: auto;
}
</style>



