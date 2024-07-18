import React, { useEffect, useRef, useState } from "react";

function MoreInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setShow(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <p
        style={isOpen ? null : styles}
        ref={ref}
        className="text-base sm:text-lg lg:text-xl "
      >
        A PG will never be more than a PG. But Sendai House by Stanza Living
        will never be less than a second home. We also know that besides those
        'home' comforts, you also love technology. That's why the Stanza Living
        - Resident App, the use of machine learning, and other tech integrations
        create a living experience that reflects that. And while we're on the
        topic of family, we'd like you to know that we're taking every
        precaution possible, from regular sanitization to thermal monitoring, to
        keep you safe from COVID-19. Because that's what family is for.
      </p>

      {show && (
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer font-semibold"
        >
          {isOpen ? "Read Less..." : "Read More..."}
        </span>
      )}
    </div>
  );
}

export default MoreInfo;
