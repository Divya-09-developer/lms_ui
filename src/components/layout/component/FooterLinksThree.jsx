import React from "react";
import { footerLinks } from "../../../data/footerLinks";
export default function FooterLinksThree({ allClasses, parentClass }) {
  return (
    <>
      {footerLinks.slice(0, 3).map((elm, i) => (
        <div key={i} className={parentClass || "col-xl-4 col-lg-4 col-md-6 "}>
          <div className={`${allClasses ? allClasses : ""}`}>{elm.title}</div>
          <div className="d-flex y-gap-10 flex-column ">
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
