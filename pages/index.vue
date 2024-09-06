<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg.webp);">

    <HeaderSection />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <HeroBanner />

    <AboutUs1 class="mb-20"></AboutUs1>
    <AboutUs2 class="mb-20"></AboutUs2>
    <GamingWorld />

    <LiveStream />

    <UpcomingMatchesHome/> 
    <!-- bu ham kera bo'lishi mumkin qatorda  -->

    <CounterUp />

    <PopularGame />

    <Testimonial />

    <BlogPost/>

    <ContactBanner :paddingTop="paddingTop" />
    <Faq></Faq>
    <Footer></Footer>

  </div>
</template>

<script>


export default {
  components: {
    HeaderSection: () => import('@/components/HeaderSection'),
    HeroBanner: () => import('@/components/HeroBanner'),
    AboutUs1: () => import('@/components/AboutUs1.vue'),
    AboutUs2: () => import('@/components/AboutUs2.vue'),
    OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
    GamingWorld: () => import('@/components/GamingWorld'),
    LiveStream: () => import('@/components/LiveStream'),
    UpcomingMatchesHome: () => import('@/components/UpcomingMatchesHome'),
    CounterUp: () => import('@/components/CounterUp'),
    PopularGame: () => import('@/components/Games/PopularGame'),
    Testimonial: () => import('@/components/Testimonial'),
    BlogPost: () => import('@/components/BlogPost'),
    ContactBanner: () => import('@/components/ContactBanner'),
    Faq: () => import('@/components/FaqAccordion.vue'),
    Footer: () => import('@/components/Footer')
  },
  data() {
    return {
      navOpen: false,
      paddingTop: "pt-32"
    }
  },
}
</script>
