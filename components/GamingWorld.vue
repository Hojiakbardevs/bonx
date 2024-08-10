<template>
    <!-- Gaming World Section Start -->
    <div class="lg:mb-32 md:mb-20 mb-15 relative">
        <div class="container">
            <TitleSection :title="title"  />
            <ul class="text-left max-w-xl mx-auto text-slate-300 list-decimal pl-6 space-y-3 mb-10">
            <li class="leading-relaxed ">
                97% of students report that gamified learning experiences enhance their motivation;
            </li>
            <li class="leading-relaxed">
                Gamification can increase long-term retention rates by 70%;
            </li>
            <li class="leading-relaxed">
                67% of students find gamified courses more motivating than traditional ones.
            </li>
        </ul>
        </div>
        <div class="container">
            <div ref="slider" class="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide scroll-smooth gap-3">
                <div class="min-w-[360px] snap-center text-white text-center bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 mx-4"
                    :style="{ backgroundImage: `url(${service.videoBannerBg})` }" v-for="(service, index) in services"
                    :key="index">
                    <div class="mb-12 text-center">
                        <img class="h-37 w-36 mx-auto" :src="service.imgSrc" :alt="service.name">
                    </div>
                    <div class="block">
                        <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4">{{ service.live }}
                        </h3>
                        <p>{{ service.text }}</p>
                    </div>
                </div>
            </div>
            <!-- O'ngga harakatlanish tugmasi -->

        </div>
    </div>
    <!-- Gaming World Section End -->
</template>

<script>
export default {

    components: {
        TitleSection: () => import('@/components/Title/TitleSection'),
    },
    data() {
        return {
            title: "In education, gamification proves its power by significantly boosting student engagement and outcomes:",
            services: [
                {
                    imgSrc: "/images/others/gaming-world1.webp",
                    name: "Service Image",
                    live: "Live Streaming",
                    text: "When unknown printer took type and scrambled it to make type specimen book centuries,",
                    videoBannerBg: "/images/others/gaming-world-bg1.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world2.webp",
                    name: "Service Image",
                    live: "Game News",
                    text: "When unknown printer took type and scrambled it to make type specimen book centuries,",
                    videoBannerBg: "/images/others/gaming-world-bg2.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world3.webp",
                    name: "Service Image",
                    live: "Game Tournaments",
                    text: "When unknown printer took type and scrambled it to make type specimen book centuries,",
                    videoBannerBg: "/images/others/gaming-world-bg3.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world2.webp",
                    name: "Service Image",
                    live: "Game News",
                    text: "When unknown printer took type and scrambled it to make type specimen book centuries,",
                    videoBannerBg: "/images/others/gaming-world-bg2.webp"
                }
            ]
        }
    },
}
</script>
<style>
/* Scrollbarni yashirish */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Scroll transition */
.scroll-smooth {
    scroll-behavior: smooth;
}
</style>