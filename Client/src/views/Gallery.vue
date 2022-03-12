<template>
  <div>
    <div id="banner">
      <div id="imageBanner"></div>
      <div id="aboutBanner" class="row">
        <div class="col-2">
          <img src="../assets/portrait.png" id="userPic" alt="" />
        </div>
        <div class="col-3">
          <h1>{{ userName }}</h1>
          <ul>
            <li>
              <box-icon type="logo" :name="userSocial[0].rede"></box-icon>
              <a :href="userSocial[0].link">
                {{ userSocial[0].nome }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h6>
            {{ userBio }}
          </h6>
        </div>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
      ImgAux: [],
      userName: "",
      userSocial: [{ rede: "", nome: "", link: "" }],
      userBio: "",
    };
  },
  created() {
    this.userName = "peepineyes#8435";
    this.userSocial[0].rede = "instagram";
    this.userSocial[0].nome = "PedroInstagram";
    this.userSocial[0].link = "instagram.com";
    this.userBio =
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
  height: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.row div {
  border: 1px ridge black;
}
#userPic {
  width: 10em;
  border-radius: 50%;
}
</style>
