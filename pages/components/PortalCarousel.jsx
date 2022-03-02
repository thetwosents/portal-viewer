import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Tabs } from 'antd';
import PortalOrb from './PortalOrb';
import { Swiper, SwiperSlide, Virtual } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import PortalViewControls from './PortalViewControls';

import {
  portals,
  quests
} from '../../data/mockPortals.js';
import Layout from 'antd/lib/layout/layout';

const { TabPane } = Tabs;

const PortalCarousel = () => {
  const [items, setItems] = useState([]);

  const [selectedSlide, setSelectedSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (portals) {
      setItems(portals);
    }
  }, [])

  useEffect(() => {
    // Get current portal
    const currentPortal = items[selectedSlide - 1];
    if (currentPortal) {
      console.log('currentPortal: ', currentPortal);
    }
    }, [selectedSlide, items])


  return (
    <div className="portal-carousel">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        keyboard={true}
        grabCursor={true}
        scrollbar={false}
        loop={true}
        modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
        // On slide move end, set selected slide
        onSlideChange={(swiper) => {
          setSelectedSlide(swiper.activeIndex);
          setSlideCount(swiper.slides.length);
        }}
        // On slide move end, set selected slide
        onSlideChangeEnd={(swiper) => {
          setSelectedSlide(swiper.activeIndex);
          setSlideCount(swiper.slides.length);
        }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PortalOrb item={item} selectedSlide={selectedSlide} slideCount={slideCount} setSelectedSlide={setSelectedSlide} />
                {/* Display view controls for the current portal */}
                <PortalViewControls item={item} />
                
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* A small leaderboard component with fixed position in lower right hand corner similar to a live chat */}
    </div>
  )
}


export default PortalCarousel;