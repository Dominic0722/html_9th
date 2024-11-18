window.addEventListener("load",function(){
    const swiper1 = new Swiper('.station1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable:true,
          
        },
        slidesPerView:1,
        autoHeight:true,
        autoplay:{
         delay: 3000,
       },
        speed:1000,
      });
      const swiper2 = new Swiper('.station2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable:true,
        },
        autoHeight:true,
        slidesPerView:1,
        autoplay:{
         delay: 3000,
       },
        speed:1000,
        
      });
})