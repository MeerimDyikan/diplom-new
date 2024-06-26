import './Home.css';
import aboutImg1 from "../../images/Carousel-1-7-2024-ru-en.jpg"
import aboutImg2 from "../../images/Carousel-2-7-2024-ru-en.jpg"
import aboutImg3 from "../../images/Carousel-3-7-2024-ru-en.jpg"
import aboutImg4 from "../../images/Carousel-4-7-2024-ru-en.jpg"
import aboutImg5 from "../../images/Carousel-5-7-2024-ru-en.jpg"
import aboutImg6 from "../../images/Carousel-6-7-2024-ru-en.jpg"
import middleImg from "../../images/Middle-1-8-2024.jpg"
import middleImg1 from "../../images/Middle-2-8-2024.jpg"
import vomoImg from "../../images/vomo.jpg"
import bonusImg1 from "../../images/ideo1.jpg"
import bonusImg2 from "../../images/bonus2.jpg"
import vomoImg2 from "../../images/felice.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

import video from '../../video/video_2024-05-22_22-12-55.mp4';
import video2 from "../../video/video2.mp4"
import video3 from "../../video/video3.mp4"
function Home() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

      >
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg1} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg2} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg3} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg4} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg5} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to="#"> <img src={aboutImg6} alt="" /> </Link>
        </SwiperSlide>

        ...
      </Swiper>
      <div className="container_mid flex">
        <div className="card_middle"> <img src={middleImg} alt="" className="mid" />
          <h2 className="middle">К ПОДВИГАМ ГОТОВ</h2>
          <Link className="middle" to="https://faberlic.com/index.php?option=com_catalog&view=seriesitem&id=1000249210417&Itemid=2075">Серия Lancelot</Link>

        </div>
        <div className="card_middle"> <img src={middleImg1} alt="" className="mid" />
          <h2 className="middle"> ФОРМУЛА ПОБЕДЫ</h2>
          <Link className="middle" to="https://faberlic.com/index.php?option=com_flippingbook&view=catalog"> Смотреть каталог</Link>
        </div>

      </div>
      <h3  className='head'>ВАС МОЖЕТ ЗАИНТЕРЕСОВАТЬ</h3>
      <div className="innerimg flex"><div className="outer-image"><img src={bonusImg2} alt="" /><div className="inner-image"><img src={bonusImg1} alt="" />

      </div>

      </div>
        <div className="centered_text">Любой дезодорант-спрей iDeo со скидкой 50% всего за 205 KGS при покупке по каталогу за каждые 525 KGS в заказе!</div></div>


		
        <div className="innerimg flex"><div className="outer-image"><img src={vomoImg} alt="" /><div className="inner-image1"><img src={vomoImg2} alt="" />

</div>

</div>
  <div className="centered_text">У счастья есть свой аромат – искристый, задорный, наполненный энергией сицилийских фруктов..</div></div>
       <h3  className='head'>Распаковка</h3>
      <div className="video1 flex">
          <video width="100%" muted autoPlay className="video3">
            <source src={video} type="video/mp4" />
          </video>
         
          <video width="100%" muted autoPlay className="video3">
            <source src={video2} type="video/mp4" />
          </video>
          <video width="100%" muted autoPlay className="video3">
            <source src={video3} type="video/mp4"  />
          </video>
      </div>
       
     </>
    );

};
export default Home;