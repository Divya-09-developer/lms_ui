import { links } from "../../../data/links";

import React from "react";

export default function Links({ allClasses }) {
  return (
    <>
      {links.map((link, index) => (
        <a
          className={`${allClasses ? allClasses : ""}`}
          key={index}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
