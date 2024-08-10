<template>
    <!-- About Section Start -->
    <div class="container flex items-center space-x-4 flex-col lg:flex-row gap-4">

        <div class="w-full lg:w-1/2">
            <div class="about_title lg:mb-6 mb-4">

                <h2
                    class="text-white font-exo font-bold uppercase xl:text-title lg:text-4xl md:text-3xl sm:text-2xl text-1xl xl:leading-50 lg:leading-12 leading-10 ">
                    We invest to potential of
                    Gamificated learning</h2>
            </div>
            <div class="about_desc mb-10">
                <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                    Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                <ul class="mb-10">
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Dynamic reports and
                        dashboards</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Templates for everyone</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Development workflow</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Limitless business
                        automation</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Knowledge management
                    </li>
                </ul>
                <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                </p>
            </div>
            <div class="about_btn">
                <n-link to="/contact" class="group primary-btn opacity-100 transition-all"
                    style="background-image:url(/images/others/btn-bg.webp)">
                    {{ btnName }}
                    <img src="/images/icon/arrrow-icon.webp" alt="Arrow Icon"
                        class="ml-3 w-5 h-5 group-hover:ml-4 transition-all">
                </n-link>
            </div>
        </div>
        <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div class="sm:mr-12 mr-0 text-center relative">
                <img src="/images/about/teaching_description.webp" alt="teaching description">
                <CoolLightBox :items="items" :index="index" @close="index = null">
                </CoolLightBox>
                <div v-for="(item, imageIndex) in items" :key="imageIndex">
                    <div @click="index = imageIndex"
                        class="absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-120 w-120 bg-primary rounded-full flex justify-center items-center z-30 before:content-[''] before:h-120 before:w-120 before:bg-primary before:opacity-50 before:rounded-full before:absolute before:z-20 before:transition-all hover:before:h-32 hover:before:w-32">
                        <i class="icofont-ui-play z-40 text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Section End -->
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    components: {
        CoolLightBox
    },
    data() {
        return {
            btnName: "Play Now",
            items: [
                {
                    src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
                }
            ],
            index: null
        }
    }
}
</script>