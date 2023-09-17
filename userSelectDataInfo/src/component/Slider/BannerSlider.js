import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SlickSlider() {
    var settings = {
        // --------1-------------
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1

        // --------- 2 ----------
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        
        // --------- 3 -----------
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
      };

  return (
    <div>
    <br/>
        {/* <h2 style={{textAlign:'center'}}>Slider</h2>
        <hr/><br/> */}
        <Slider {...settings}>
      <div>
        <img src='BannerImg/bs1.webp' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs2.webp' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs3.jpg' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs4.jpg' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs5.jpg' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs6.jpg' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs7.jpg' width='100%' height='300px' alt='bannerimg' />
      </div>
      <div>
      <img src='BannerImg/bs8.webp' width='100%' height='300px' alt='bannerimg' />
      </div>
      
    </Slider>
    </div>
  )
}
