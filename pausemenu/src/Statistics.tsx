function Statistics() {
  return (
    <>
      <div id="statistics_tab" className="split_grid_top">
        <div className="stats_title">
          <h1>Statistics</h1>
          <h2>Your stats in Season 1 of Stadium</h2>
        </div>

        {/* user name  */}
        <div className="actual_stat_container">
          <div className="stat_container">
            <div className="spacer"></div>
            <h1>User Name</h1>
          </div>
          <h1 id = "username" className="stat_info">A ReallY LONG NAME ADAD 313113 123 3123132dadaA</h1>
        </div>

        {/* account id */}
        <div className="actual_stat_container">
          <div className="stat_container">
            <div className="spacer"></div>
            <h1>Account ID</h1>
          </div>
          <h1 id ="account_id" className="stat_info">0</h1>
        </div>

        <div className="actual_stat_container">
          <div className="stat_container">
            <div className="spacer"></div>
            <h1>Play Time</h1>
          </div>
          <h1 id="playtime" className="stat_info">0h</h1>
        </div>

        <div className="actual_stat_container">
          <div className="stat_container">
            <div className="spacer"></div>
            <h1>Kills</h1>
          </div>
          <h1 id = "kills" className="stat_info">312222222222222222222222220</h1>
        </div>
      </div>
    </>
  );
}

export default Statistics;
