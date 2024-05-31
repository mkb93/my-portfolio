import emailjs from "emailjs-com";
import { ChangeEvent } from "react";
import { Row, Spinner, Toast, Col } from "react-bootstrap";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import "../styles/Contact.css";

const Contact = ({ setPageLocation }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    console.log("true");
    e.preventDefault();

    console.log(e.target);
    await emailjs
      .sendForm(
        "service_sf7ziep",
        "template_nwn91a8",
        e.target,
        "n3Wuv2ruAUuU3ZXMv"
      )
      .then(
        (result) => {
          alert("email sent")
          console.log(result);
        },
        (error) => {
          alert("An error occurred!");
          console.log(error.text);
        }
      );
    e.target.reset();
    setLoading(false);
    console.log("false");
  };

  return (
    <>
      <div id="contact">
        <Waypoint onEnter={() => setPageLocation("contact")} />
        <div className="contactformwithtoast">
          <div className="contactform">
            <form
              className="contact-form d-flex flex-column justify-content-center p-4 mx-3"
              onSubmit={handleSubmit}
            >
              <div className="formheader">
                <h1>Send me a message!</h1>
              </div>
              <div className="namenemail">
              <div className="form-group p-3">
                <strong>Your Name * </strong>
                <input
                  required
                  type="text"
                  className="yourname"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="emaildiv">
                <strong>Your Email * </strong>
                <input
                  required
                  type="email"
                  className="youremail"
                  placeholder="Enter your email address"
                  name="email"
                />
              </div>
              </div>
              <div className="form-group pt-2 p-3">
                <strong>Your message * </strong>

                <textarea
                  className="yourmessage"
                  id=""
                  cols={30}
                  rows={8}
                  placeholder="Enter your message"
                  name="message"
                ></textarea>
              </div>
              <div className="pt-3 p-3 mx-auto btn-con">
                {loading ? (
                  <>
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="primary" />
                  </>
                ) : (
                  <input
                    required
                    type="submit"
                    disabled={loading}
                    className="btn"
                    value="Send Message"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
