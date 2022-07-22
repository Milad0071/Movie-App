<template>
    <v-row class="search px-10 py-5 d-flex align-center">
        <v-col>
            <span class="font-weight-bold">Search by release date:</span>
        </v-col>
        <v-col>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="dateRangeText"
                    label="Date range"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                v-model="dates"
                range
                >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(date)"
                >
                    OK
                </v-btn>
                </v-date-picker>
            </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="s-btn d-flex justify-content-end">
            <v-btn app depressed rounded dark color="blue lighten-2" class="text-capitalize">Search</v-btn>
        </v-col>
    </v-row>
</template>
<script>

export default {
    name: 'SearchBox',
    data () {
        return {
            dates: ['2019-09-10', '2019-09-20'],
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,}
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
}
</script>

<style scoped>
.search {
    background-color: #E2E2E2;
}
.d-flex {
    justify-content: end;
}
</style>