import { React, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {
  const options = [
    {
      label: "Afrikkans",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
    {
      label: "Spanish",
      value: "es",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "Russian",
      value: "rus",
    },
  ];
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field" style={{ margin: "20px" }}>
          <label className="label">Enter Text:</label>
          <input
            style={{ maxWidth: "400px" }}
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select Language"
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
