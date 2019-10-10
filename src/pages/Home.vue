<template>
<div></div>
    <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
     
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
 
        <div class="swiper-scrollbar"></div>
    </div> -->
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {})
    }
}
</script>

<style>
.swiper-container {
    width: 600px;
    height: 300px;
}
</style>