import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductBox from "./components/product-box";
import MobileShowCase from "./components/mobileShowCase";

function HomePage() {
  return (
    <>
      <Splide
        tag="section"
        options={{
          rewind: true,
          perPage: 1,
          gap: "5rem",
          height: "500px",
          pagination: true,
          type: "loop",
          arrows: true,
          cover: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="images/slider_1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="images/slider_2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="images/slider_3.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
      <MobileShowCase />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="newsletter-wrapper">
              <div className="row">
                <div className="col-lg-offset-5 col-lg-6 col-md-offset-5 col-md-6 col-sm-offset-5 col-sm-6 col-xs-12">
                  <div className="newsletter-form">
                    <h1>
                      Subscribe To <strong>Get Discount &amp; Offers</strong>
                    </h1>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                      />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-primary">
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
