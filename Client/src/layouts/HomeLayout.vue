<template>
    <div>
        <div class="d-flex justify-content-start">
            <div class="sidebar fustify-content-start">
                <ul class="nav flex-column p-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Active</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
            <router-link class="pt-3 homeIcon" to="/Home">Home</router-link> 
            <nav class="nav justify-content-start p-3 sidebarSizedMargin navBar">
                <router-link class="px-4" to="/about">About</router-link> |
                <router-link class="px-4" to="/Gallery">Gallery</router-link>
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
}
.sidebar {
    width: 15rem;
    height: calc(100% - 4rem);
    position: absolute;
    margin-top: 4rem;
    background-color: #272643;
}
.navBar {
    background-color: #bae8e8;
    position: absolute;
    width: calc(100% - 15rem);
    height: 4rem;
}
.sidebarSizedMargin{
    margin-left: 15rem;
}
.homeIcon{
    /* margin:0 5.6rem 0 5.6rem; */
    position: absolute;
    background-color: #2c698d;
    height: 4rem;
    padding-left: 6.2rem;
    padding-right: 6.2rem;
}
.content {
    height: calc(100vh - 4rem);
    margin-top: 4rem;
    margin-left: 15rem;
    background-color: #e3e3e3;
    overflow-y: auto;
}
</style>
