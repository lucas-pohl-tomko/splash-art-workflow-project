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
    background-color:#e3e3e3 ;
}

.navBar {
    margin: .2rem;
    background-color: #bae8e8;
    position: absolute;
    width: calc(100% - 15.2rem);
    height: 4rem;
    border-radius:1rem 1rem 1rem 1rem;

}

.sidebarSizedMargin{
    margin-left: 15.2rem;
}

.homeIcon{
    margin: .2rem;
    position: absolute;
    background-image: linear-gradient(180deg, #2c698d, #272643);
    height: 4rem;
    padding-left: 6.1525rem;
    padding-right: 6.1525rem;
    border-radius:1.2rem 1.2rem 0rem 0rem;

}

.sidebar {
    margin: .2rem;
    width: 15rem;
    border-radius:0 0 1rem 1rem;
    height: calc(100% - 4.2rem);
    position: absolute;
    margin-top: 4rem;
    background-color: #272643;
}


.content {
    height: calc(100vh - 4.2rem);
    margin-top: calc(4rem + .2rem);
    margin-left: calc(15rem + .2rem);
    background-color: #e3e3e3;
    overflow-y: auto;
}
</style>
