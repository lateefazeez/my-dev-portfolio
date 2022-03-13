import React from "react";

export default function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testiomonials", "contact"].map(
        (item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a
              className="app__navigation-dot"
              onClick={() => setToggle(false)}
              key={item + index}
              href={`#{item}`}
              style={active == item ? { backgroundColor: "#313BAC" } : {}}
            />
          </li>
        )
      )}
    </div>
  );
}
