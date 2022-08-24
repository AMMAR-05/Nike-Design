import "./App.css";
import Navbar from "./components/Navbar";
import UpperShoe from "./images/Bitmap.png";
import LowerShoe from "./images/Bitmap2.png";
import InfoIcon from "./images/Info.png";
import DeliveryIcon from "./images/Delivery.png";
import ReviewsIcon from "./images/Star.png";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Home Page */}
      <div className="home">
        <img className="upperShoe" src={UpperShoe} alt="shoe" />
        <img className="lowerShoe" src={LowerShoe} alt="shoe" />

        {/* Main Page */}
        <div className="main">
          <div className="overlay">
            <div className="gridContainer">
              {/* Title */}
              <p className="mainTitle">
                Feel strong <br /> <span>like lebron</span>
              </p>

              {/* Description */}
              <div className="description">
                <p>
                  The LeBron 17 LMTD features a large <b>Max Air</b> unit in the
                  heel and Zoom Air cushioning for extra <b>comfort</b>.
                </p>
                <p>
                  Knit material wraps your feet for <b>lightweight</b> support
                  so you can make quick, powerful moves like a champ.
                </p>
              </div>

              {/* Infos */}
              <div className="infos">
                <img src={InfoIcon} alt="info" />
                <img src={DeliveryIcon} alt="delivery" />
                <div className="reviewsIcon">
                  <span>4,7</span>
                  <img src={ReviewsIcon} alt="reviews" />
                </div>
              </div>

              {/* Basket */}
              <div className="basket">
                <select name="shoe" id="size-select">
                  <option value="eu_44">EU 44</option>
                  <option value="eu_45">EU 45</option>
                </select>
                <div className="addToBakset">
                  <button type="button" className="basketBtn">
                    Add to basket
                  </button>
                  <span className="productPrice">$ 249</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
