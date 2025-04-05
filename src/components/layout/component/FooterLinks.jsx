import React from "react";
import { Footer } from "../../../data/footerLinks";

export default function FooterLinks({ allClasses }) {
  return (
    <>
      {Array.isArray(Footer) &&
      Footer.map((elm, i) => (
        <div key={i} className="col-xl-2 col-lg-4 col-md-6">
          <div className={`${allClasses ? allClasses : ""}`}>{elm.title}</div>
          <div className="d-flex y-gap-10 flex-column">
            {elm.links.map((itm, index) => (
              <a key={index} href={itm.href}>
                {itm.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
