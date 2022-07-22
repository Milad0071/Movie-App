<template>
    <v-pagination
        v-model="page"
        class="pagin my-4"
        :length="50"
        :total-visible="7"
        @input="getPage"
    >
    </v-pagination>
</template>
<script>
export default {
    data() {
        return {
            page: 1,
        }
    },
    methods : {
        getPage() {
            this.$emit('getPage' , this.page)
        }
    }
}
    
        
</script>
