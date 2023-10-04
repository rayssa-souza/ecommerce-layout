import React from "react";
import "./style.scss";
import Container from "../../components/container";
import { TbError404 } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <Container>
      <div className="error-page">
        <div className="error-page-wrapper">
          <div className="error-page-icon">
            <TbError404 />
          </div>
          <span>Whoops! Something went wrong. Please return to home page.</span>
        </div>
      </div>
    </Container>
  );
};
export default ErrorPage;
