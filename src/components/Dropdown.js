import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const bodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", bodyClick, true);

    // cleanup function
    return () => {
      document.body.removeEventListener("click", bodyClick, true);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      // null in react means don't render anything
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        // React event listener
        onClick={() => {
          setSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" style={{ margin: "20px" }} ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${
            open ? "visible transition" : ""
          }`}
          style={{ maxWidth: "400px" }}
        >
          <i className="angle down icon" style={{ float: "right" }}></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
