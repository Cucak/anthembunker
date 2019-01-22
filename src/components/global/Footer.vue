<template>
  <div id="footer">
    <div id="content">
      <div class="columns">
        <div class="column">
          <h3>Info</h3>
          <ul>
            <li>
              <a href="https://www.anthemvault.com/why-gold" target="_blank">WHY</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/faq/" target="_blank">FAQ</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/news" target="
                ">News</a>
            </li>
            <li>
              <a href="http://news.anthemvault.com/" target="_blank">Blog</a>
            </li>
            <li>
              <a href="/metamask" class>Metamask</a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="https://www.anthemvault.com/why" target="_blank">Why Us</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/team" target="_blank">Our Team</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/our-legacy" target="_blank">Our Legacy</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/contact" target="_blank">Contact Us</a>
            </li>
            <li>
              <a href="https://anthemgold.com" target="_blank">AnthemGold</a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="https://www.anthemvault.com/terms" target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="https://www.anthemvault.com/privacy" target="_blank">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h3>Social Media</h3>
          <div>
            <i class="fab fa-facebook-f fa-2x"></i>
            <i class="fab fa-linkedin-in fa-2x"></i>
            <i class="fab fa-twitter-square fa-2x"></i>
            <i class="fab fa-google-plus-g fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
    <footer class="footerEnd">
      <div class="content has-text-centered">
        <p>© 2018 Anthem Vault Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
#footer {
  background-color: rgb(26, 35, 126);
  text-align: center;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h3 {
  color: $bunker-gray;
  padding-bottom: 10px;
}

ul li a {
  color: gray;
}

ul li a:hover {
  color: white;
}

.columns {
  padding: 30px;
}

i {
  color: white;
  margin: 3%;
}

i:hover {
  color: orange;
  box-shadow: 0px 12px 18px -6px #000;
}

.footerEnd {
  background-color: rgb(20, 29, 103);
  padding: 10px;
  color: white;
}
</style>


