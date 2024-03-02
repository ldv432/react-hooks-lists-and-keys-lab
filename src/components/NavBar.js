import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkies = links.map((link, index) =>{
    return <a key={index} href={`#${link}`}>{link}</a>
  })
    return <nav>{linkies}</nav>;
}

export default NavBar;
