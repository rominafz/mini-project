import React from "react";
import { useHistory } from "react-router";
import { Button } from "../components/Button";

const NotFoundPage = () => {
  const history = useHistory();
  /**
   *  handle going to the home page
   */
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="not-found">
      <p className="not-found__content">
        پیجی با آدرس &nbsp;
        <strong className="not-found__content__location">
          {history.location.pathname}
        </strong>
        &nbsp; پیدا نشد
      </p>
      <Button className="not-found__button" onClick={handleGoHome}>
        برو به صفحه اصلی
      </Button>
    </div>
  );
};

export default NotFoundPage;
