"use client";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";

function Navigation() {
  const handleMenu = () => {
    document
      .getElementById("menu__list")!
      .classList.toggle("menu__list--animate");
    document.getElementById("menu__btn")!.classList.toggle("menu-open");
  };

  return (
    <nav className={"navigation"}>
      <div className={"container"}>
        <Link href={"/"} className="title ">
          <span>N</span>ext <span>B</span>log
        </Link>

        <div className="links-desktop">
          <Link href={"/"} className="link1">
            A
          </Link>
          <Link href={"/"} className="link1">
            B
          </Link>
          <Link href={"/"} className="link1">
            C
          </Link>
        </div>
        <div className="links-mobile">
          <div className="btn" id="menu__btn" onClick={handleMenu}>
            <AiFillCaretDown />
          </div>
          <div className="wrapper">
            <div className="menu" id="menu__list">
              <ul className="menu__list">
                <li className="menu__list__item">
                  <a href="#" className="link1">
                    A
                  </a>
                </li>
                <li className="menu__list__item">
                  <a href="#" className="link1">
                    B
                  </a>
                </li>
                <li className="menu__list__item">
                  <a href="#" className="link1">
                    C
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
