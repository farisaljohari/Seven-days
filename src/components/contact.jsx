import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import validator from "validator";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [validEmail, setValidEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === "email") {
      setValidEmail(validator.isEmail(value));
    }
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail || !message) {
      toast.error("Please enter a valid email and message.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      email: email,
      name: name || email.split("@")[0],
      message: message,
    };

    emailjs
      .send(
        "service_5bfu66p" || "",
        "template_hfji0vc" || "",
        templateParams,
        "cOHrF6LLA13SxyS_a" || ""
      )
      .then(() => {
        setEmailSent(true);
        clearState();
      })
      .catch(() => {
        toast.error("Failed to send email.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (emailSent) {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        closeOnClick: true,
      });
    }
  }, [emailSent]);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      {!validEmail && email && (
                        <p className="help-block text-danger">Invalid email</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={isSubmitting || !validEmail || !message}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            {/* Contact info and social links remain unchanged */}
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Seven Days. All rights reserved.</p>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
};
