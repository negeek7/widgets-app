import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    // to update the URL
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div>
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
