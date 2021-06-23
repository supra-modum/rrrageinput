import React from "react";

export const Contacts: React.FC = () => {
  return (
    <>
      <div className="divider" data-content="Contacts" />
      <div className="u-center w-80" style={{ height: "300px" }}>
        <div className="col-12">
          <p className="lead">
            Email:{" "}
            <a href="mailto:" className="u u-LR text-indigo-400">
              3mfhognm5@relay.firefox.com
            </a>
          </p>
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
      </div>
    </>
  );
};
