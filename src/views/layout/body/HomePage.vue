<template>
  <div class="mt-10">
      <v-container>
        <SearchBox />
        <FilmList />
      </v-container>
    </div>
</template>
<script>
import SearchBox from "@/components/SearchBox.vue"
import FilmList from '@/components/FilmList.vue'

export default {
    name: "HomePage",
    components: { SearchBox, FilmList}
}
</script>


