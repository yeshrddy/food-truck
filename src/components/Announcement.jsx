import React, { useState, useEffect } from "react";

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAnnouncement && (
        <div className="bg-amber-100 text-amber-700 px-4 py-3">
          <p className="text-center text-sm font-medium">
            <a
              href="https://github.com/yeshrddy/food-truck/tree/master"
              className="inline-block "
            >
              Check out the project on GitHub!
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Announcement;
