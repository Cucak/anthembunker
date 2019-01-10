<template>
  <div class="home">
    <NavBar></NavBar>
    <VueSlide></VueSlide>
    <FamilyBrand></FamilyBrand>
    <Footer></Footer>
    <back-to-top bottom="100px" right="10px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import NavBar from "@/components/home/NavBar.vue";
import VueSlide from "@/components/home/VueSlide.vue";
import FamilyBrand from "@/components/home/FamilyBrand.vue";
import Footer from "@/components/home/Footer.vue";

export default {
  name: "home",
  components: {
    NavBar,
    VueSlide,
    FamilyBrand,
    Footer
  }
}
</script>
