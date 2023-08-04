import NewsFeature from "./NewsFeature";
import NewsData from "../data/Novedades.json";
import NewsFeatureModal from "./NewsFeatureModal";

const News = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {NewsData.map((news) => (
          <NewsFeature
            key={news.id}
            id={news.id}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
