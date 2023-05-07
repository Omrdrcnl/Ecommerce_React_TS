import { Splide, SplideSlide } from "@splidejs/react-splide";

function HomePage() {
  return (
    <>
      <section className="splide">
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
            width: "100%",
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
      </section>
    </>
  );
}

export default HomePage;
