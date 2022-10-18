import BannerImageSection from "../components/BannerImageSection";
import Playoffs from "../components/Playoffs";
import ProductCards from "../components/ProductCards";
import TwoProductsSideBySide from "../components/TwoProductsSideBySide";

const Home = () => {
  return (
    <div>
      {/* Important notices section */}
      <section className="text-center bg-gray-100 py-2 px-4 md:px-0">
        It's taking us a bit longer than usual to get your order to you. Thank
        you for your patience.
      </section>

      {/* Image Element */}
      <div className="container mx-auto px-4 md:p-0">
        <BannerImageSection
          para="Join Forces pack"
          heading="40 YEARS OF FORCE"
          btnOne="Shop AF1"
          btnTwo="Learn More"
          textColor="white"
          bgColor="white"
          btnTextColor="black"
          imgUrl="/nike-just-do-it.jpg"
        />
      </div>

      {/* Product Cards Section */}
      <ProductCards />

      {/* 2 image side by side section */}
      <TwoProductsSideBySide />

      {/* Big image of shoe section */}
      <div className="mt-12 container mx-auto p-4 md:p-0">
        <h3 className="text-2xl mb-4">Just In</h3>
        <BannerImageSection imgUrl="/double-shoes.jpg" />
      </div>

      {/* Playoffs area section */}
      <Playoffs />

      {/* Don't miss section */}

      <div className="mt-12 container mx-auto p-4 md:p-0">
        <h3 className="text-2xl mb-4">Don't Miss</h3>
        <BannerImageSection
          para="Brazil"
          heading="NATIONAL TEAM COLLECTION"
          btnOne="Shop"
          textColor="black"
          bgColor="black"
          btnTextColor="white"
          imgUrl="/dont-miss.webp"
        />
      </div>
    </div>
  );
};

export default Home;
