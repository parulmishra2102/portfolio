import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data';

function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  //which one is selelcted, whenever this selected matching any of the below title it will be work as a active class.
  const list = [
    {
      id: 'featured',
      title: 'featured',
    },
    {
      id: 'web',
      title: 'web',
    },
    {
      id: 'mobile',
      title: 'MobileApp',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(
          (
            item //Here Each item will return portfolio list where we passed title and id as a props
          ) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            ></PortfolioList>
          )
        )}
      </ul>
      <div className="container">
      {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            
          ></img>
          <h3>{d.title}</h3>
        </div>
        ))}
        
      </div>
    </div>
  );
}
export default Portfolio;
