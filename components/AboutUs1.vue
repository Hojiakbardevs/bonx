<template>
    <!-- About Section Start -->
    <div class="container flex items-center space-x-4 flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div class="sm:mr-12 mr-0 text-center relative">
                <img src="/images/about/gamification_description.webp" alt="gamitification description">
                <CoolLightBox
                    :items="items"
                    :index="index"
                    @close="index = null">
                </CoolLightBox>
                <div v-for="(item, imageIndex) in items" :key="imageIndex">
                    <div @click="index = imageIndex" class="absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-120 w-120 bg-primary rounded-full flex justify-center items-center z-30 before:content-[''] before:h-120 before:w-120 before:bg-primary before:opacity-50 before:rounded-full before:absolute before:z-20 before:transition-all hover:before:h-32 hover:before:w-32">
                        <i class="icofont-ui-play z-40 text-white"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/2">
            <div class="about_title lg:mb-6 mb-4">
                <h5 class="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16">About Wonder code</h5>
                <h2 class="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl"> Work with tools you already use. </h2>
            </div>
            <div class="about_desc mb-10">
                <p>Explore the world of Logic and Critical Thinking, where every puzzle is a quest and every challenge sharpens your mind. Our gamified approach turns learning into an exciting journey, making it easy and fun to develop essential skills.</p>
                <ul class="mb-10">
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Math&logic</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Mnemonics</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Skills</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Programming</li>
                    <li> <img src="/images/about/mark_icon.webp" alt="icons" class="size-4"> Learning managment system</li>
                </ul>
                <p>At WonderCode, we believe in the power of gamification. Our interactive lessons, leaderboards, and reward systems make learning addictive and fun. Compete, achieve, and see your name rise to the top!</p>
            </div>
            <div class="about_btn">
                <a href="https://wondercode.uz/demo2.html" target="_blank" class="group primary-btn opacity-100 transition-all" style="background-image:url(/images/others/btn-bg.webp)">
                    {{btnName}}
                    <img src="/images/icon/arrrow-icon.webp" alt="Arrow Icon" class="ml-3 w-5 h-5 group-hover:ml-4 transition-all">
                </a>  
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
    data(){
        return {
            btnName: "Play Now",
            items: [
                {
                    src: "https://youtu.be/P7XKcTzjyAg"
                }
            ],
            index: null
        }
    }
}
</script>