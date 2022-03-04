<template>
    <div>
        <Img v-for="(item, index) in ImgAux" :key="index" :img="item"></Img>
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
        };
    },
    created() {
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

<style scoped></style>
