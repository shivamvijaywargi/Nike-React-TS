import AboveHeader from "../components/AboveHeader";
import BannerImageSection from "../components/BannerImageSection";
import ProductCards from "../components/ProductCards";
import TwoProductsSideBySide from "../components/TwoProductsSideBySide";

const Home = () => {
  return (
    <div>
      {/* Important notices section */}
      <section className="text-center bg-gray-100 py-2 px-4">
        It's taking us a bit longer than usual to get your order to you. Thank
        you for your patience.
      </section>

      {/* Image Element */}
      <BannerImageSection />

      {/* Product Cards Section */}
      <ProductCards />

      {/* 2 image side by side section */}
      <TwoProductsSideBySide />
    </div>
  );
};

export default Home;
