import PropTypes from "prop-types";

const CallToAction = ({ title, subtitle }) => {
  return (
    <>
      <div style={{ fontSize: "80px", fontWeight: "bold" }}>
        {title}
      </div>
      <div style={{ fontSize: "30px" }}>
        {subtitle}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button className="btn btn-primary">Comprar Ahora!</button>
      </div>
    </>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

CallToAction.defaultProps = {
  title: "Titulo predeterminado",
  subtitle: "Subtitulo predeterminado",
};

export default CallToAction;
