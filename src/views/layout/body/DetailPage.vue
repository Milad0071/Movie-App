<template>
    <div class="mt-10">
        <v-container>
            <v-row class="search px-10 py-5 d-flex align-center">
                <v-col cols="2">
                    <v-btn app depressed rounded dark color="blue lighten-2" class="text-capitalize" to="/">
                        <v-icon left>mdi-arrow-left</v-icon>
                        <span>Back</span>
                    </v-btn>
                </v-col>
                <v-col cols="10" class="d-flex flex-column align-items-center">
                    <h4 class="font-weight-bold">{{post.title}}</h4>
                    <p>{{post.tagline}}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5">
                    <v-img
                    :src = post.poster_path
                    aspect-ratio="1.7"
                    width="330"
                    height="495"
                    ></v-img>
                </v-col>
                <v-col cols="7" class="d-flex justify-content-between mt-7">
                    <div>
                        <p class="font-weight-bold">Budget</p>
                        <p class="font-weight-bold mt-5">Revenue</p>
                        <p class="font-weight-bold mt-5">Release Date</p>
                        <p class="font-weight-bold mt-5">Runtime</p>
                        <p class="font-weight-bold mt-5">Score</p>
                        <p class="font-weight-bold mt-5">Genres</p>
                        <p class="font-weight-bold mt-5">IMDB Link</p>
                        <p class="font-weight-bold mt-5">HomePage Link Link</p>
                    </div>
                    <div>
                        <p>{{post.budget}}</p>
                        <p class="mt-5">{{post.revenue}}</p>
                        <p class="mt-5">{{post.release_date}}</p>
                        <p class="mt-5">{{post.runtime}}</p>
                        <p class="mt-5">{{post.vote_average}}</p>
                        <span v-for="(genre , k) in genres" :key="k">
                            {{genre.name}},
                        </span>
                        <p class="mt-5">IMDB Link</p>
                        <p class="mt-5">{{post.homepage}}</p>
                    </div>
                </v-col>
                <v-col cols="12">
                    <p class="text-justify">{{post.overview}}</p>
                </v-col>
                <v-col cols="12" class="mt-10">
                    <h4>Credits:</h4>
                    <span v-for="(actor , j) in actors" :key="j">
                        {{actor.name}}, 
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            post : {},
            actors: {},
            genres:{},
            id: ''
        }
    },
    created() {
        const id = this.$route.params.post
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`)
            .then(res => {
                this.post = res.data
                this.post.poster_path = "https://image.tmdb.org/t/p/original" + this.post.poster_path;
                for(let i=0; i<this.post.genres.length;i++){
                    this.genres[i] = this.post.genres[i]
                }
                console.log(this.post)
                console.log(this.genres)
            })
            .catch(err => {
                console.log(err)
            })
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`)
                .then(res => {
                        this.actors = res.data.cast
                })
                .catch(err => {
                console.log(err)
                })
    },
    methods : {
        sendId() {
            
        }
    }
}
</script>
<style>
    .search {
    background-color: #E2E2E2;
}
.v-application p {
    margin-bottom: auto;
}
.v-application .d-flex {
    justify-content: space-between;
}
</style>