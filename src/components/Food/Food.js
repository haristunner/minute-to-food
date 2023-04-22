import React from "react";
import "./Food.css";
import biriyani from "../../assets/chickenBiriyani.webp";
import butterMasala from "../../assets/butterChickenMasala.webp";
import BBQchicken from "../../assets/BBQchicken.jpeg";
import chickenWings from "../../assets/chickenWings.jpeg";
import muttonBiriyani from "../../assets/muttonBiriyani.webp";
import kothuParotta from "../../assets/kothuParotta.jpeg";
import grill from "../../assets/grillChicken.webp";
import chickenNoodles from "../../assets/chickenNoodles.webp";
import chickenRice from "../../assets/chickenRice.webp";
import thukpa from "../../assets/thukpa.webp";
import beefChilli from "../../assets/beefChilli.webp";
import chickenRoll from "../../assets/chickenRoll.webp";
import manchowSoup from "../../assets/manchowSoup.webp";
import mushroom65 from "../../assets/mushroom65.webp";
import chicken65 from "../../assets/chicken65.webp";
import fishFry from "../../assets/fishFry.jpeg";
import dosa from "../../assets/dosai.webp";
import breadOmelette from "../../assets/breadOmelette.webp";
import { useSelector } from "react-redux";

export const Food = () => {
  const location = useSelector((state) => state.user.location);

  return (
    <div className="food">
      <header>
        <h1>Order Your FAVOURITE FooD from <span>{location}</span> </h1>
      </header>
      <div className="food__container">
        <div className="box">
          <img src={biriyani} alt="" />
          <h3>RR Biriyani</h3>
          <p>Chicken Biriyani</p>
          <h6>
            INR <span>219</span>
          </h6>
        </div>
        <div className="box">
          <img src={butterMasala} alt="" />
          <h3>SS Dhaba</h3>
          <p>Butter Chicken Masala</p>
          <h6>
            INR <span>169</span>
          </h6>
        </div>
        <div className="box">
          <img src={BBQchicken} alt="" />
          <h3>Scooter BBQ</h3>
          <p>BBQ Chicken</p>
          <h6>
            INR <span>449</span>
          </h6>
        </div>
        <div className="box">
          <img src={chickenWings} alt="" />
          <h3>Hot Chik</h3>
          <p>Chicken Wings</p>
          <h6>
            INR <span>135</span>
          </h6>
        </div>
        <div className="box">
          <img src={muttonBiriyani} alt="" />
          <h3>Hazarath Restaurant</h3>
          <p>Mutton Biriyani</p>
          <h6>
            INR <span>320</span>
          </h6>
        </div>
        <div className="box">
          <img src={kothuParotta} alt="" />
          <h3>Esakki Parotta's</h3>
          <p>Kothu parotta</p>
          <h6>
            INR <span>140</span>
          </h6>
        </div>
        <div className="box">
          <img src={grill} alt="" />
          <h3>BBQ Scooters</h3>
          <p>Full Grill Chicken</p>
          <h6>
            INR <span>499</span>
          </h6>
        </div>
        <div className="box">
          <img src={chickenNoodles} alt="" />
          <h3>Fast Foods</h3>
          <p>Chicken Noodles</p>
          <h6>
            INR <span>120</span>
          </h6>
        </div>
        <div className="box">
          <img src={chickenRice} alt="" />
          <h3>Fast Foods</h3>
          <p>Chicken Fried Rice</p>
          <h6>
            INR <span>120</span>
          </h6>
        </div>
        <div className="box">
          <img src={thukpa} alt="" />
          <h3>Tibetan Kitchen</h3>
          <p>Chicken Thukpa</p>
          <h6>
            INR <span>211</span>
          </h6>
        </div>
        <div className="box">
          <img src={beefChilli} alt="" />
          <h3>Muncheez</h3>
          <p>Beef Chilli</p>
          <h6>
            INR <span>281</span>
          </h6>
        </div>
        <div className="box">
          <img src={chickenRoll} alt="" />
          <h3>Muncheez</h3>
          <p>Beef Roll</p>
          <h6>
            INR <span>240</span>
          </h6>
        </div>
        <div className="box">
          <img src={manchowSoup} alt="" />
          <h3>Anifa Foods</h3>
          <p>Chicken Manchow Soup</p>
          <h6>
            INR <span>219</span>
          </h6>
        </div>
        <div className="box">
          <img src={mushroom65} alt="" />
          <h3>Kassibar Food Court</h3>
          <p>Mushroom 65</p>
          <h6>
            INR <span>160</span>
          </h6>
        </div>
        <div className="box">
          <img src={chicken65} alt="" />
          <h3>Kassibar Food Court</h3>
          <p>Chicken 65</p>
          <h6>
            INR <span>180</span>
          </h6>
        </div>
        <div className="box">
          <img src={fishFry} alt="" />
          <h3>Sea Foods</h3>
          <p>Fish Fry Full</p>
          <h6>
            INR <span>199</span>
          </h6>
        </div>
        <div className="box">
          <img src={dosa} alt="" />
          <h3>Saravana Bhavan</h3>
          <p>Plain Nice Dosa</p>
          <h6>
            INR <span>65</span>
          </h6>
        </div>
        <div className="box">
          <img src={breadOmelette} alt="" />
          <h3>Crispy Spot</h3>
          <p>Bread Omelette</p>
          <h6>
            INR <span>60</span>
          </h6>
        </div>
      </div>
    </div>
  );
};
