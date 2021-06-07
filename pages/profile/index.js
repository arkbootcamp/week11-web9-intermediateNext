import { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";
import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";

const inputStyle = {
  width: "30px",
};

const inputContainer = {
  width: "25%",
  margin: "auto",
};

export default function Profile() {
  const [pin, setPin] = useState({});
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  const changeText = (event) => {
    if (event.target.value) {
      const nextSibling = document.querySelector(
        `input[name='${parseInt(event.target.name, 10) + 1}']`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
  };

  const handleSubmit = () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    console.log(allPin);
  };

  return (
    <Layout title="Profile">
      <Navbar />
      <h1>Profile Page !</h1>
      <div className="container">
        <div style={inputContainer}>
          <div className="row">
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="1"
              />
            </div>
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="2"
              />
            </div>
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="3"
              />
            </div>
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="4"
              />
            </div>
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="5"
              />
            </div>
            <div className="col-2">
              <input
                style={inputStyle}
                maxLength="1"
                onChange={(event) => changeText(event)}
                name="6"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <button
        type="button"
        onClick={() => modal.show()}
        className="btn btn-primary"
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        ref={exampleModal}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => modal.hide()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
