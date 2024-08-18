<template>
    <div class="">
        <FooterWidgetTitle :title="title"/>
        <div class="flex flex-col mb-5 pr-5 xl:pr-0">
            <span class="text-primary mb-3">Location:</span>
            <p>Uzbekistan Tashkent city</p>
        </div>
        <div class="flex flex-col">
            <span class="text-primary mb-3">Phone:</span>
            <a :href="`tel:${phone}`" class="text-white hover:text-primary transition-all">{{phone}}</a> 
        </div>
    </div>
</template>
<script>
export default {
    components:{
        FooterWidgetTitle: () => import('@/components/Footer/FooterWidgetTitle'),
    },
    data () {
        return {
            title: "Contact",
            phone: "+998 93 472 43 81"
        }
    },
}
</script>