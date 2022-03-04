<template>
    <div>
        <div class="d-flex justify-content-start">
            <div class="sidebar fustify-content-start">
                <ul class="nav flex-column p-3">
                    <li class="nav-item">
                        <a
                            class="nav-link active pb-3 d-flex justify-content-start"
                            aria-current="page"
                            href="#"
                            >Active Projects</a
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class=" d-flex justify-content-start" to="/Gallery"><a class="nav-link p-3" href="#">Gallery</a></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3 d-flex justify-content-start" href="#">Work Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3 d-flex justify-content-start" href="#">Waiting List</a>
                    </li>
                </ul>
            </div>
            <router-link
                class="pt-3 homeIcon border-bottom"
                to="/Home"
                style="position: absolute"
                >
                    <p class="logo" style="position: absolute; left: 6.5rem">
                        Logo
                    </p>
                </router-link
            >
            <nav
                class="nav justify-content-start p-3 sidebarSizedMargin navBar"
            >
                <router-link class="px-4" to="/about">Tab 1</router-link> |
                <router-link class="px-4" to="/Gallery">Tab 2</router-link>
            </nav>
        </div>

        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #e3e3e3;
}

.navBar {
    margin: 0.2rem;
    background-color: #bae8e8;
    position: absolute;
    width: calc(100% - 15.2rem);
    height: 4rem;
    border-radius: 1rem 1rem 1rem 1rem;
}

.sidebarSizedMargin {
    margin-left: 15.2rem;
}

.sidebar .active {
}

.homeIcon {
    margin: 0.2rem;
    position: absolute;
    /* background-image: linear-gradient(180deg, #2c698d, #272643); */
    background-color: #272643;
    height: 4rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    border-radius: 1.2rem 1.2rem 0rem 0rem;
}

.sidebar {
    margin: 0.2rem;
    width: 15rem;
    border-radius: 0 0 1rem 1rem;
    height: calc(100% - 4.2rem);
    position: absolute;
    margin-top: 4rem;
    background-color: #272643;
}

.content {
    height: calc(100vh - 4.2rem);
    margin-top: calc(4rem + 0.2rem);
    margin-left: calc(15rem + 0.2rem);
    background-color: #e3e3e3;
    overflow-y: auto;
}
</style>
