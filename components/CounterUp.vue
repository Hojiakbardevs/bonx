<template>

    <!-- CounterUp Section Start -->
    <div class="container mt-32 pb-32">
        <div v-observe-visibility="{callback: visibilityChanged, once: true}">
            <div v-if="commentsVisible" class="grid md:grid-cols-4 grid-cols-2 gap-9">
                <div v-for="(count, imageIndex) in counter" :key="imageIndex"  class="text-white text-center">
                    <countTo class="text-white text-5xl lg:text-10xl uppercase font-metal font-normal block" :class="count.className" :startVal='count.startVal' :endVal='count.endVal' :duration='3000' :autoplay='true'></countTo>
                    <p class="uppercase mt-3 sm:mt-5 text-base lg:text-lg">{{count.text}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- CounterUp Section End -->

</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        components: {
            countTo
        },
        data () {
            return {
                commentsVisible: false,
                counter: [
                    {
                        startVal: 0,
                        endVal: 25,
                        className: "text-bright",
                        text: "Brain Boost"
                    },
                    {
                        startVal: 0,
                        endVal: 70,
                        className: "text-bright",
                        text: "Memory"
                    },
                    {
                        startVal: 0,
                        endVal: 50,
                        className: "text-punch",
                        text: "Problem-Solving"
                    },
                    {
                        startVal: 0,
                        endVal: 40,
                        className: "text-primary",
                        text: "Focus"
                    }
                ]
            }
        },
        methods: {
            visibilityChanged(isVisible) {
                this.commentsVisible = isVisible;
            },
        }
    }
</script>