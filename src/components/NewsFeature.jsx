import PropTypes from "prop-types";
import NewsFeatureModal from "./NewsFeatureModal";

const NewsFeature = ({ id, title, description }) => {
  return (
    <div className="feature col text-white">
      <h3 className="fs-2">{title}</h3>
      <p>{description}</p>
      <NewsFeatureModal id={id} title={title} />
    </div>
  );
};

NewsFeature.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

NewsFeature.defaultProps = {
  id: 0,
  title: "Titulo predeterminado",
  description: "Descripción predeterminada",
};

export default NewsFeature;
