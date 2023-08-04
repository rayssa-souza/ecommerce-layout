import React from "react";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineArrowRight } from "react-icons/ai";
import isEmailValid from "../../utils/isEmailValid";
import "./style.scss";

const NewsletterForm = ({ children }) => {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [check, setCheck] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = isEmailValid(email);

    if (!isValid) {
      return setIsEmailInvalid(true);
    }

    console.log(isValid);

    if (check && isValid) {
      setSubmit(true);
      setTimeout(() => {
        setSubmit(false);
        setEmail("");
        setCheck(false);
      }, 3000);
    }
    console.log(isValid);
  };

  console.log(isEmailInvalid);
  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="newsletter">
      {!submit && (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-form-submit">
            <input
              className={`newsletter-form-input ${
                isEmailInvalid ? "newsletter-email-validation" : ""
              }`}
              type="text"
              value={email}
              placeholder="Give an e-mail, get the newsletter."
              onChange={(e) => {
                setIsEmailInvalid(false);
                setEmail(e.target.value);
              }}
            />

            <button
              className="newsletter-form-button"
              type="submit"
              disabled={!check}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="newsletter-form-terms">
            <input
              className="newsletter-form-checkbox"
              type="checkbox"
              value={check}
              onChange={handleCheck}
              id="checkbox"
            />
            <label htmlFor="checkbox">
              I agree to the website's terms and conditions.
            </label>
          </div>
        </form>
      )}

      {submit && (
        <div className="newsletterform-feedback">
          <p>
            <AiOutlineCheck />
            Thanks! Soon we'll be sending it to you!
          </p>
        </div>
      )}

      {children}
    </div>
  );
};
export default NewsletterForm;
