<template>
  <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">
    
    <HeaderSection/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    
    <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

    <BlogList />

    <PopularGame />


    <ContactBanner :paddingTop="paddingTop"/>

    <Footer></Footer>

  </div>
</template>

<script>
export default {
  components: {
      HeaderSection: () => import('@/components/HeaderSection'),
      OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
      Breadcrumb: () => import('@/components/Breadcrumb'),
      BlogList: () => import('@/components/Blog/BlogList'),
      ContactBanner: () => import('@/components/ContactBanner'),
      Footer: () => import('@/components/Footer'),
      PopularGame: () => import('@/components/Games/PopularGame'),
  },
  data() {
      return {
          navOpen: false,
          BreadcrumbTitle: "Demo o'yinlar",
          BreadcrumbSubTitle: "Demo o'yinlar",
          paddingTop: "pt-32"
      }
  },
}
</script>