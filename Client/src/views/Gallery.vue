<template>
  <div>
    <div id="banner">
      <div id="imageBanner"></div>
      <div id="aboutBanner" class="row">
        <div class="col-2">
          <img src="../assets/portrait.png" alt="..." class="img-thumbnail rounded-circle">
        </div>
        <div class="col-3">
          <h3>{{ user.name }}</h3>
          <ul>
            <li>
              <box-icon type="logo" :name="user.social[0].rede"></box-icon>
              <a :href="user.social[0].link">
                {{ user.social[0].nome }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-7">
          <h6>
            {{ user.bio }}
          </h6>
        </div>
      </div>
    </div>

    <Img
      v-for="(item, index) in ImgAux"
      :key="index"
      :img="item"
      class="hidden"
    ></Img>
  </div>
</template>

<script>
import Img from "../components/GalleryImage";
export default {
  components: {
    Img,
  },
  data() {
    return {
      user: {
        banner: { exists: false, bannerUrl: "" },
        name: "",
        social: [{ rede: "", nome: "", link: "" }],
        bio: "",
      },
      ImgAux: [],
    };
  },
  created() {
    this.user.name = "peepineyes#8435";
    this.user.social[0].rede = "instagram";
    this.user.social[0].nome = "PedroInstagram";
    this.user.social[0].link = "instagram.com";
    this.user.bio =
      "Consequat pariatur deserunt culpa veniam elit duis. Tempor aliqua et mollit proident quis magna in exercitation aliqua aliquip laborum incididunt do labore. Commodo sit anim laboris ea aute ad tempor adipisicing duis in commodo Lorem. Qui cupidatat non officia in magna dolore enim eu Lorem ut incididunt veniam tempor. Mollit do reprehenderit aliqua elit labore cillum minim mollit reprehenderit aliqua eiusmod ullamco commodo deserunt. Excepteur proident Lorem ipsum Lorem do consequat sit sunt irure aute ad.";
    this.ImgAux = [
      "https://picsum.photos/500",
      "https://picsum.photos/600",
      "https://picsum.photos/700",
      "https://picsum.photos/800",
      "https://picsum.photos/900",
    ];
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
#imageBanner {
  background-image: url("../assets/casa.jpg");
  height: 17rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.row div {
  border: 1px ridge black;
}
#userPic {
  width: 192px;
  height: 192px;
  border-radius: 50%;
}
</style>
