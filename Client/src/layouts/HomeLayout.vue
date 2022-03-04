<template>
    <div>
        <div class="d-flex justify-content-start">
            <nav class="nav justify-content-end p-3 sidebarSizedMargin navBar">
                <router-link class="px-4" to="/about">Tab 1</router-link> |
                <router-link class="px-4" to="/Gallery">Tab 2</router-link>
            </nav>
            <div class="sidebar fustify-content-start">
                <ul class="nav flex-column p-3">
                    <li class="nav-item">
                        <router-link
                            class="d-flex justify-content-start"
                            to="/Home"
                            ><a class="nav-link p-3" href="#"
                                ><img
                                    src="../assets/logo.png"
                                    class="img-fluid p-4"
                                    alt=""
                                    srcset="" /></a
                        ></router-link>
                    </li>
                    <div class="border"></div>
                    <li class="nav-item">
                        <a
                            class="nav-link active pb-3 d-flex justify-content-start"
                            aria-current="page"
                            href="#"
                        >
                            <i class='bx bx-store-alt'></i>
                            Active Projects</a
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="d-flex row justify-content-start"
                            to="/Gallery"
                            ><a class="nav-link p-3" href="#"
                                ><box-icon class="me-3" name='store-alt'></box-icon>Gallery</a
                            ></router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="d-flex row justify-content-start"
                            to="/Gallery"
                            ><a class="nav-link p-3" href="#"
                                ><box-icon class="me-3" name='store-alt'></box-icon>Gallery</a
                            ></router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="d-flex row justify-content-start"
                            to="/Gallery"
                            ><a class="nav-link p-3" href="#"
                                ><box-icon class="me-3" name='store-alt'></box-icon>Gallery</a
                            ></router-link
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #525252;
}

.navBar {
    margin: 0.2rem;
    background-color: #313131;
    position: absolute;
    width: calc(100% - 5.2rem);
    height: 4rem;
    border-radius: 0rem 1rem 1rem 0rem;
}

.sidebarSizedMargin {
    margin-left: 5.2rem;
}

.homeIcon {
    margin: 0.2rem;
    position: absolute;
    /* background-image: linear-gradient(180deg, #2c698d, #272643); */
    background-color: #333333;
    height: 4rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    border-radius: 1.2rem 1.2rem 0rem 0rem;
}

.sidebar {
    margin: 0.2rem;
    width: 5rem;
    border-radius: 1rem 0rem 1rem 1rem;
    height: calc(100% - 0.4rem);
    position: absolute;
    background-color: #313131;
    transition: width 0.5s, border-radius 0.5s;
}

.sidebar:hover {
    width: 15rem;
    border-radius: 1rem 1rem 1rem 1rem;
    transition: width 0.5s, border-radius 0.5s;
}
.content {
    height: calc(100vh - 4.2rem);
    margin-top: calc(4rem + 0.2rem);
    margin-left: calc(5rem + 0.2rem);
    overflow-y: auto;
}
</style>
