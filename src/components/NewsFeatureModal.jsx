import PropTypes from "prop-types";

const NewsFeatureModal = ({ id, title }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#${id}Modal`}
      >
        Inscribite
      </button>

      <div
        className="modal fade"
        id={`${id}Modal`}
        tabIndex="-1"
        aria-labelledby={`${id}ModalLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light text-center">
            <div className="modal-header">
              <h5
                className="modal-title fs-5 text-uppercase"
                id={`${id}ModalLabel`}
              >
                {title}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6 className="mb-3">Inscribite ahora!!</h6>
              <input
                className="form-control"
                type="text"
                aria-label="default input example"
              ></input>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary">
                Más info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewsFeatureModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

NewsFeatureModal.defaultProps = {
  id: 0,
  title: "Titulo predeterminado",
};

export default NewsFeatureModal;
