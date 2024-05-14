// import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import Cart from "./Pages/Cart";
// import Product from "./Pages/Product";
// import Footer from "./Components/Footer/Footer";
// import ShopCategory from "./Pages/ShopCategory";
// import women_banner from "./Components/Assets/banner_women.png";
// import men_banner from "./Components/Assets/banner_mens.png";
// import kid_banner from "./Components/Assets/banner_kids.png";
// import LoginSignup from "./Pages/LoginSignup";

// function App() {

//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Shop gender="all" />} />
//           <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
//           <Route path='/product' element={<Product />}>
//             <Route path=':productId' element={<Product />} />
//           </Route>
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignup/>} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import Contactus from "./Pages/Contactus";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";

import shop1 from "./Components/Assets/shop1.1.jpg";
import shop2 from "./Components/Assets/shop2.1.jpg";
import shop3 from "./Components/Assets/shop3_f.jpg";
import kid1 from "./Components/Assets/kids2.jpg";
 import kid2 from "./Components/Assets/kid2_f.png";
 import kid3 from "./Components/Assets/kid3_f.png";

function App() {
  const womenBanners = [shop1, shop2, shop3];
  //const menBanners = [men_banner1, men_banner2, men_banner3];
  const kidBanners = [kid1, kid2, kid3];

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          {/* <Route
            path="/mens"
            element={
              <ShopCategory
                banners={menBanners}
                category="men"
              />
            }
          /> */}
          <Route
            path="/womens"
            element={
              <ShopCategory
                banners={womenBanners}
                category="women"
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                banners={kidBanners}
                category="kid"
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;

