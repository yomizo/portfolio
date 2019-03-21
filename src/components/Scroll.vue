<template>
    <scroll-view>
        <template slot-scope="markers">
            <scroll-marker
                v-for="marker in markerNames"
                :name="marker"
                :key="marker"
                :visible="markers[marker]"
                :spacing="800"
                @isVisible="markerVisible"
                @isNotVisible="markerNotVisible"
            ></scroll-marker>
        </template>
    </scroll-view>
</template>

<script>

  export default {
    data() {
        return {
            markerNames: ['first', 'second', 'third']
        }
    },
    methods: {
        markerVisible(name) {
            console.log(`marker ${name} is visible!`)
        },
        markerNotVisible(name) {
            console.log(`marker ${name} is no longer visible!`)
        }
    }
  }
</script>

<style>

</style>
