import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";

const PortalOrb = ({ item, selectedSlide, slideCount, setSelectedSlide }) => {
  const [orbWidth, setOrbWidth] = useState(0);
  const [orbHeight, setOrbHeight] = useState(0);
  const [orbSize, setOrbSize] = useState(window.innerWidth / 4);
  const [videoUrl, setVideoUrl] = useState(item.videoUrl);

  // Set initial orb size
  useEffect(() => {
    if (item) {
      setOrbWidth(orbSize);
      setOrbHeight(orbSize);
    }
  }, [])

  // If screen is resized, update the orb size
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (item) {
        if (window.innerWidth < window.innerHeight) {
          setOrbSize(window.innerWidth / 4);
          setOrbWidth(window.innerWidth / 4);
          setOrbHeight(window.innerWidth / 4);
        } else {
          setOrbSize(window.innerHeight / 3);
          setOrbWidth(window.innerHeight / 3);
          setOrbHeight(window.innerHeight / 3);
        }
      }
    })
  }, [item])


  // On hover, increase the orb size and animate the orb to the center of the screen
  const onHover = () => {
    setOrbSize(window.innerWidth / 3.5);
    setOrbWidth(window.innerWidth / 3.5);
    setOrbHeight(window.innerWidth / 3.5);
  }

  // On hover, decrease the orb size and animate the orb to the center of the screen
  const onLeave = () => {
    setOrbSize(window.innerWidth / 4);
    setOrbWidth(window.innerWidth / 4);
    setOrbHeight(window.innerWidth / 4);
  }


  if (!item) return null;
  return (
    <>
      <OrbImage item={item} />
      <div
        onMouseLeave={onLeave}
        onMouseEnter={onHover}
        className="portal-orb" style={{ width: orbWidth, height: orbWidth }}>
        <OrbVideo item={item} />
        <div className="orb-meta-details" style={{ marginTop: orbSize }}>
          <h3 className="orb-title">{item.title || 'Please update the title property on your object'}</h3>
          {/* Portal highlights table */}
        </div>

      </div>
      <div className="orb-qr-code">
        <QRCode value={item.url} size={orbSize / 4} />
      </div>
    </>
  )
}

const OrbImage = ({ item }) => {

  // onClick, dispatch action SET_PORTAL to set the current portal with react-redux and useSelector to get the current portal
  const onClick = () => {
    // dispatch action SET_PORTAL to set the current portal with react-redux and useSelector to get the current portal
    let currentPortal = item;

    // Set the current portal in localStorage
    localStorage.setItem('currentPortal', JSON.stringify(currentPortal));
  }

  if (!item) return null;
  return (
    <div className="orb-bg-img" style={{ backgroundImage: `url(${item.image})`, width: window.innerWidth, height: window.innerHeight }}>
    </div>
  )
}

const OrbVideo = ({ item }) => {
  return (
    <div className="orb-bg-video" >
      <video autoPlay loop muted src={(item.videoUrl) ? item.videoUrl : '/testBG.mp4'}></video>
    </div>
  )
}

export default PortalOrb;