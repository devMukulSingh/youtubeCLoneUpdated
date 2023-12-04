import React, {  useState } from 'react'
import "./_categoriesBar.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


/////////////////////////////////////////////////
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5
  }
};
const CategoriesBar = ( {setCategoryQuery} ) => {
 
  const keywords = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node Js",
    "Express Js",
    "Material UI",
    "MongoDB",
    "Tailwind CSS",
    "Prisma ORM",
    "Next Js",
    "AWS",
    "TypeScript",
    "Docker",
    "DevOps"
    ];
    const [activeElement,setActiveElement] = useState('All');
    const handleClick = (value) => {
      setCategoryQuery(value);
      setActiveElement(value);
    }
  return (
    <div className='carousel'>
      <Carousel
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        autoPlay={false}
        infinite={true}
        >
          {
            keywords.map( (value,i) => {
              return(
              <span onClick={ () => handleClick(value) } key ={i} className={activeElement===value ? "active" : ""}>
                {value}
              </span>
              )
            })
          }
      </Carousel>
    </div>
  )
}

export default CategoriesBar;