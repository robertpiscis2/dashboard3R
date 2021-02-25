import React, { useRef, useEffect, useState } from "react";
// import "../javascript/switchScript";
import "./switch.css";

function Switch() {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);

  // console.log(ref);
  function handleChange() {
    // console.log(ref.current.checked);
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  function changeMedia(mq) {
    setChecked(mq.matches);
    if (mq.matches) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    if (mq.matches) {
      // ref.current.setAttribute("checked", true);
      setChecked(true);
    }
  }, []);

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={checked}
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
