import React from "react";
import "cirrus-ui";

export const Contacts: React.FC = () => {
  return (
    <div
      className="u-flex u-items-center u-justify-center"
      style={{ height: "300px" }}
    >
      <div className="py-2 mx-2">
        <div className="col-5">
          <p className="lead">
            Email:{" "}
            <a href="mailto:" className="u u-LR text-indigo-400">
              3mfhognm5@relay.firefox.com
            </a>
          </p>
        </div>
        <div className="col-5">
          <p className="lead">
            Telegram:{" "}
            <a
              href="https://t.me/supramodum"
              className="u u-LR text-indigo-400"
            >
              supramodum
            </a>
          </p>
        </div>
        <div className="divider" />
      </div>
    </div>
  );
};
