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
import { Box } from "../Box/Box";
import { ShoppingCart } from "@mui/icons-material";

export const Food = () => {
  const location = useSelector((state) => state.user.location);

  return (
    <div className="food">
      <header>
        <h1>
          Order Your FAVOURITE FooD from <span>"{location}" </span>!!
        </h1>
      </header>

      <div
        className="addToCart"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap:"5px"
        }}
      >
        <h2>Visit The Cart :</h2>
        <button >
          <h5>GO TO CART</h5> <ShoppingCart />
        </button>
      </div>

      <div className="food__container">
        <Box
          img={biriyani}
          h3={"RR Biriyani"}
          p={"Chicken Biriyani"}
          span={"219"}
        />
        <Box
          img={butterMasala}
          h3={"SS Dhaba"}
          p={"Butter Chicken Masala"}
          span={"169"}
        />

        <Box
          img={BBQchicken}
          h3={"Scooter BBQ"}
          p={"BBQ Chicken"}
          span={"449"}
        />

        <Box
          img={chickenWings}
          h3={"Hot Chik"}
          p={"Chicken Wings"}
          span={"135"}
        />

        <Box
          img={muttonBiriyani}
          h3={"Hazarath Restaurant"}
          p={"Mutton Biriyani"}
          span={"320"}
        />

        <Box
          img={kothuParotta}
          h3={"Esakki Parotta's"}
          p={"Kothu parotta"}
          span={"140"}
        />

        <Box
          img={grill}
          h3={"BBQ Scooters"}
          p={"Full Grill Chicken"}
          span={"499"}
        />

        <Box
          img={chickenNoodles}
          h3={"Fast Foods"}
          p={"Chicken Noodles"}
          span={"120"}
        />

        <Box
          img={chickenRice}
          h3={"Fast Foods"}
          p={"Chicken Fried Rice"}
          span={"120"}
        />

        <Box
          img={thukpa}
          h3={"Tibetan Kitchen"}
          p={"Chicken Thukpa"}
          span={"211"}
        />

        <Box img={beefChilli} h3={"Muncheez"} p={"Beef Chilli"} span={"281"} />

        <Box img={chickenRoll} h3={"Muncheez"} p={"Beef Roll"} span={"240"} />

        <Box
          img={manchowSoup}
          h3={"Anifa Foods"}
          p={"Chicken Manchow Soup"}
          span={"219"}
        />

        <Box
          img={mushroom65}
          h3={"Kassibar Food Court"}
          p={"Mushroom 65"}
          span={"160"}
        />

        <Box
          img={chicken65}
          h3={"Kassibar Food Court"}
          p={"Chicken 65"}
          span={"180"}
        />

        <Box img={fishFry} h3={"Sea Foods"} p={"Fish Fry Full"} span={"199"} />

        <Box
          img={dosa}
          h3={"Saravana Bhavan"}
          p={"Plain Nice Dosa"}
          span={"65"}
        />

        <Box
          img={breadOmelette}
          h3={"Crispy Spot"}
          p={"Bread Omelette"}
          span={"60"}
        />
      </div>
    </div>
  );
};
