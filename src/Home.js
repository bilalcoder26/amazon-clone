import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/New_Family/M-series_1500x600_2._CB406906625_.jpg"
        // height="500px"
        // width="1500px"
        data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/New_Family/M-series_3000x1200_2._CB406906626_.jpg"
        alt="img"
      />
      {/* product id, title,price,rating,image */}
      <div className="home__row">
        <Product
          id="12345"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="54879"
          title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
          price={199}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41nfFG3+E6L._AC_SX184_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="265741"
          title="Ashwati Women's Rayon Regular Kurta"
          price={645}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/71n01OLOW9L._AC_UL320_SR212,320_.jpg"
        />

        <Product
          id="235678714"
          title="Upto 45% off on Huggies Diapers"
          price={124}
          rating={2}
          image="https://m.media-amazon.com/images/I/51ZFlxijYhL.__AC_SY200_.jpg"
        />

        <Product
          id="12354783"
          title="Maggi 2-Minute Noodles Masala , 70g (Pack of 12)"
          price={12}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51iKIxN1rSL._AC_SY200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1258741"
          title="Sony Bravia 101.6 cm (40 inches) Full HD LED TV KLV-40R352F (Black) | With Amazon Fire Stick at Zero Cost"
          price={2567}
          rating={4}
          image="https://m.media-amazon.com/images/I/817Z1q3zTWL._AC_UY218_.jpg"
        />
      </div>

      {/* product */}
    </div>
  );
}

export default Home;
