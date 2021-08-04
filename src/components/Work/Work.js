import './Work.scss';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import React, { useState } from 'react';

function Work() {
  const [currentSlider, setSlider] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Web Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Branding',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ];
  const handleClick = (direction) => {
    direction === 'left'
      ? setSlider(currentSlider > 0 ? currentSlider - 1 : 2):
       setSlider(currentSlider < data.length - 1 ? currentSlider+1 : 0);
       
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: ` translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt=""></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {' '}
                    {d.desc}
                    <span>Projects</span>
                  </p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('right')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('left')}
      />
    </div>
  );
}

export default Work;
