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
                        <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase">{{ service.live }}
                        </h3>
                        <p class="text-lg leading-9 text-justify" >{{ service.text }}</p>
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
                    live: "Cognitive Development",
                    text: "Studies show that gamified learning can enhance cognitive development in children by improving problem-solving skills and executive functioning. Games that incorporate educational content can stimulate brain areas involved in decision-making and strategic thinking (Source: Journal of Educational Psychology).",
                    videoBannerBg: "/images/others/gaming-world-bg1.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world2.webp",
                    name: "Service Image",
                    live: "Engagement and Motivation",
                    text: "Research indicates that gamified learning environments can significantly boost engagement and motivation in young learners. The use of rewards and interactive elements helps to maintain students' attention and enthusiasm, leading to better learning outcomes (Source: Computers & Education).",
                    videoBannerBg: "/images/others/gaming-world-bg2.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world3.webp",
                    name: "Service Image",
                    live: "Memory Retention",
                    text: "Gamification has been found to improve memory retention in children. A study published in Frontiers in Psychology shows that interactive and game-based learning experiences can enhance long-term retention of information compared to traditional methods, as they make learning more memorable and enjoyable.",
                    videoBannerBg: "/images/others/gaming-world-bg3.webp"
                },
                {
                    imgSrc: "/images/others/gaming-world2.webp",
                    name: "Service Image",
                    live: "Increased Learning Efficiency",
                    text: "Gamified learning environments can enhance learning efficiency by providing immediate feedback and adaptive challenges. According to research in Educational Technology Research and Development, students in gamified settings learn more effectively because they receive instant feedback and adjust their strategies in real-time, leading to a more efficient learning process.",
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