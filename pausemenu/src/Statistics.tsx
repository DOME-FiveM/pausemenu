import React, { useEffect, useState } from 'react';

function Statistics() {
  const [isTextWrapped, setIsTextWrapped] = useState(false);

  const checkTextWrapping = () => {
    const statElements = document.querySelectorAll('.a_stat .stat');
    let wrapped = false;

    statElements.forEach((el) => {
      if (el.scrollHeight > el.clientHeight) {
        wrapped = true;
      }
    });

    setIsTextWrapped(wrapped);
  };

  useEffect(() => {
    checkTextWrapping();
    window.addEventListener('resize', checkTextWrapping);
    return () => window.removeEventListener('resize', checkTextWrapping);
  }, []);

  return (
    <div id="statistics_tab" className="split_grid_top">
      <div className="stats_desc">
        <h1>Statistics</h1>
        <h2>Your stats in Season 1 of Stadium</h2>
      </div>

      {/* user name  */}
      <div className={`a_stat username ${isTextWrapped ? 'wrap' : ''}`}>
        <div className="stat_container">
          <div className="spacer"></div>
          <h1>User Name</h1>
        </div>
        <h1 className="stat">A RealYL LONG NAME ADADA</h1>
      </div>

      {/* account id */}
      <div className={`a_stat ${isTextWrapped ? 'wrap' : ''}`}>
        <div className="stat_container">
          <div className="spacer"></div>
          <h1>Account ID</h1>
        </div>
        <h1 className="stat">0</h1>
      </div>

      <div className={`a_stat ${isTextWrapped ? 'wrap' : ''}`}>
        <div className="stat_container">
          <div className="spacer"></div>
          <h1>Play Time</h1>
        </div>
        <h1 className="stat">0h</h1>
      </div>

      <div className={`a_stat ${isTextWrapped ? 'wrap' : ''}`}>
        <div className="stat_container">
          <div className="spacer"></div>
          <h1>Kills</h1>
        </div>
        <h1 className="stat">1</h1>
      </div>
    </div>
  );
}

export default Statistics;
