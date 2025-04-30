import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo.svg";
import { menuItems } from "../mocks/menuItems";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

const ivTherapyMenu = [
  { label: "NAD+", to: "/iv-therapy/drips" },
  { label: "Wellness", to: "/iv-therapy/drips" },
  { label: "Recovery", to: "/iv-therapy/drips" },
  { label: "Beauty", to: "/iv-therapy/drips" },
  { label: "Fitness", to: "/iv-therapy/drips" },
  { label: "Energy Boosters", to: "/iv-therapy/boosters" },
]

const MobileMenu = ({ isOpen, onClose }) => {
  const [menuStack, setMenuStack] = useState([]); // [{ title, items }]

  const currentMenuData =
    menuStack.length === 0
      ? { title: "Menu", items: menuItems }
      : menuStack[menuStack.length - 1];

  const handleNextLevel = (submenuItems, title) => {
    setMenuStack([...menuStack, { title, items: submenuItems }]);
  };

  const handleBack = () => {
    setMenuStack(menuStack.slice(0, -1));
  };

  return (
    <>
      <div
        className={`mobile-menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => {
          onClose();
          setMenuStack([]);
        }}
      ></div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            className="close-btn"
            onClick={() => {
              onClose();
              setMenuStack([]);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
        <ul className="menu-wrap">

        {menuStack.length === 0 && (
    <li className="menu-item">
      <div
        className="menu-single-item"
        onClick={() => handleNextLevel(ivTherapyMenu, "IV Therapy")}
      >
        <span>IV Therapy</span>
        <MdOutlineChevronRight />
      </div>
    </li>
  )}
  
  {menuStack.length > 0 && (
    <li className="menu-back" onClick={handleBack}>
      <MdArrowBack />
      <span>{menuStack[menuStack.length - 1].title}</span>
    </li>
  )}

  {Array.isArray(currentMenuData.items) && (
    currentMenuData.items.map((item, index) => (
      <li className="menu-item" key={index} style={item.modal ? {display: 'none'} : {}}>
        {item.submenuWrapper ? (
          <div
            className="menu-single-item"
            onClick={() =>
              handleNextLevel(
                item.submenuWrapper.flatMap((sw) => sw.submenuWrap),
                item.label
              )
            }
          >
            <span>{item.label}</span>
            <MdOutlineChevronRight />
          </div>
        ) : item.submenu ? (
          <div
            className="menu-single-item"
            onClick={() => handleNextLevel(item.submenu, item.submenuTitle)}
          >
            <span>{item.submenuTitle}</span>
            <MdOutlineChevronRight />
          </div>
        ) : !item.modal && (
          <Link className="menu-single-item" to={item.to} onClick={() => {
            onClose();
            setMenuStack([]);
          }}>
            <span>{item.label}</span>
          </Link>
        )}
      </li>
    ))
  )}

  
</ul>

        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
