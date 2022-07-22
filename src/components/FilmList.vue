<template>
    <v-row class="film">
        <v-col cols="3"
        v-for="(film , index) in filmList" :key="index">
            <v-card
            class="mx-auto"
            max-width="500"
            :to="`/details/${film.id}`"
            >
                <v-img contain :src="film.poster_path"></v-img>
                <v-card-title>{{film.title}}</v-card-title>
                <v-card-text><v-icon left>mdi-calendar-range</v-icon><span>{{film.release_date}}</span></v-card-text>
            </v-card>
        </v-col>
        <v-container>
            <PaginationComp @getPage="newPage(index)"></PaginationComp>
        </v-container>
    </v-row>
</template>
<script>
import axios from 'axios'
import PaginationComp from '@/components/PaginationComp.vue'

export default {
    components: {PaginationComp},
    data() {
        return {
            filmList: [],
            filmGenres: [],
        };
    },
    created() {
        this.showList();
        this.showGenres();
    },
    methods: {
        showList(page = 1) {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
                .then(res => {
                this.filmList = res.data.results;
                for (let i = 0; i < this.filmList.length; i++) {
                    this.filmList[i].poster_path = "https://image.tmdb.org/t/p/original" + this.filmList[i].poster_path;
                    console.log(this.filmList[i].id)
                }
                console.log(this.filmList);
            })
                .catch(err => console.log(err));
        },
        showGenres() {
            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US")
                .then(res => {
                this.filmGenres = res.data.genres;
                console.log(this.filmGenres);
            });
        },
        newPage(page) {
            // console.log(page)
            this.showList(page)
        },
        
    },
}
</script>
<style>
.row + .row {
    margin-top: 150px;
    margin-left: -23px;
    margin-right: -23px;
}
</style>