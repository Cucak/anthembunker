<template>
  <div id="family-brand">
    <div id="content">
      <h1 class="text-center">AnthemVault Family Brands</h1>
      <div class="columns">
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px; margin-bottom: 2%; margin-top:5%;  box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/anthemvault.png" style="width: 50%; margin: auto;">
          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">AnthemVault</h4>
          <p>Buy, store, sell and gift metals. Gold and Silver ownership made easy, secure and affordable</p>
          <a
            role="button"
            href="https://www.anthemvault.com/"
            target="_blank"
            class="button is-info"
          >Visit AnthemVault</a>
        </div>
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px; margin-bottom: 2%; margin-left: 10px; box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/amagimetals.gif" style="width: 50%; margin: auto;">

          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">Amagi Metals</h4>
          <p>Amagi Metals is a gobal bullion dealer that serves the world with quality precious metals.</p>
          <a
            role="button"
            href="https://www.amagimetals.com/"
            target="_blank"
            class="button is-info"
          >Visit Amagi Metals</a>
        </div>
      </div>

      <div class="columns">
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px; margin-bottom: 2%;  box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/anthemgold.png" style="width: 50%; margin: auto;">
          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">Anthem Gold</h4>
          <p>Anthem Gold is a global gold dealer that serves the world with quality gold bars that can be obtained with crypto currencies.</p>
          <a
            role="button"
            href="https://www.anthemgold.com/"
            target="_blank"
            class="button is-info"
          >Visit Anthem Gold</a>
        </div>
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px; margin-bottom: 2%; margin-left: 10px; box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/anthemprofessional.png" style="width: 50%; margin: auto;">
          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">AnthemVault Pro</h4>
          <p>Anthem Vault Professional allows investment advisor portfolios to shine with physical Gold & Silver bullion ownership</p>
          <a
            role="button"
            href="http://www.anthemvaultprofessional.com/"
            target="_blank"
            class="button is-info"
          >Visit AnthemVault Pro</a>
        </div>
      </div>

      <div class="columns">
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px; margin-bottom: 2%; box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/anthemnational.png" style="width: 50%; margin: auto;">
          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">Anthem National Reserve</h4>
          <p>Expert consultation services in the acquisition of bullion precious metals and rare coin investments.</p>
          <a
            role="button is-info"
            href="http://www.anthemnationalreserve.com/"
            target="_blank"
            class="button is-info"
          >Visit ANR</a>
        </div>
        <div
          class="column text-center"
          style="background-color: white; margin-top: 5%; padding: 10px; padding-left: 100px; padding-right: 100px;  margin-bottom: 2%; margin-left: 10px; box-shadow: 0 5px 20px -10px #000;"
        >
          <img src="../assets/anthembunker.png" style="width: 50%; margin: auto;">
          <h4 style="color: rgb(51, 51, 51); font-size: 1.5rem;">Anthem Bunker</h4>
          <p>AV Bunker provides safe, secure services for your most valued possessions.</p>
          <a
            role="button"
            href="https://anthembunker.com/register"
            target="_blank"
            class="button is-warning"
            style="background-color: rgb(249, 168, 37); color: white; border: none;"
          >
            <i class="fa fa-user-plus"></i> Register
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyBrand"
};
</script>

<style scoped>
#family-brand {
    padding: 50px;
}
#content {
    max-width: 1080px;
    margin: auto;
}

.column {
    padding-top: 30px !important;
    margin: 40px;
    border-radius: 5px;
}
h1 {
    color: #1A237E;
    font-size: 2.5rem;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.text-center {
    text-align: center;
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1.5rem;
    font-weight: 500;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

a {
    margin-bottom: 5%;
}

.button.is-info:hover  {
border-radius: 5px !important;
}
.button.is-warning:hover  {
border-radius: 5px;
background-color: #FF8C00 !important;
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
    h1 {
        width: 100%;
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.2;
        
    }

  img {
      width: 250px !important;
  }

  .column {
      margin: auto;
      text-align: center !important;
      padding: 10% !important;
      margin-left: 0% !important;
  }


  h4 {
    display: block;
    margin-block-start: 0%;
    margin-block-end: 0%;
    margin-inline-start: 0%;
    margin-inline-end: 0%;
    font-size: 0;
    font-weight: 500;
}
  }
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>


