<template>
    <nav :class="[`navbar-${them}`, `bg-${them}`, 'navbar', 'navbar-expand-lg']">
        <a class="navbar-brand" href="#">My Vue Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li v-for="(page, index) in pages" class=" emphasize nav-item" :key="index">
                    <navbar-link
                        :page="page"
                        :isActive="activePage === index"
                        @click="navLinkClick(index)"
                    >
                    </navbar-link>

                </li>
            </ul>
            <button class="btn btn-primary ms-auto" @click="toggleTheme">
                Toggle Mode
            </button>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink'
export default {
    components: {
        NavbarLink,
    },
    props: ['pages', 'activePage', 'navLinkClick'], // Renamed to match
    data() {
        return {
            them: 'dark',
        }
    },
    // Methods are here, outside of the data function
    methods: {
        toggleTheme() {
            this.them = (this.them === 'Light') ? 'dark' : 'Light';
        }
    }
}
</script>