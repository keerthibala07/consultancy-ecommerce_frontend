
import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

import shop1 from "../Components/Assets/shop1.1.jpg";
import shop2 from "../Components/Assets/shop2.1.jpg";
import shop3 from "../Components/Assets/shop3_f.jpg";
import kid_banner1 from "../Components/Assets/kids2.jpg";
import kid_banner2 from "../Components/Assets/kid2_f.png";
import kid_banner3 from "../Components/Assets/kid3_f.png";

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    // Fetch product data
    fetch('http://localhost:4000/allproducts') 
      .then((res) => res.json()) 
      .then((data) => setAllProducts(data));

    // Set banner images based on the category
    if (props.category === "women") {
      setBannerImages([shop1, shop2, shop3]);
    
    } else if (props.category === "kid") {
      setBannerImages([kid_banner1, kid_banner2, kid_banner3]);
    }
  }, [props.category]); // Run useEffect when category changes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setSlideIndex(index)
  };

  return (
    <div className="shopcategory">
      <Slider {...settings}>
        {bannerImages.map((banner, index) => (
          <div key={index}>
            <img src={banner} alt={`Banner ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="shopcategory-indexSort">
        <p><span>Explore the Collections</span></p>
        {/* <div className="shopcategory-sort">Sort by <img src={dropdown_icon} alt="" /></div> */}
      </div>
      <div className="shopcategory-products">
         {allProducts.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;