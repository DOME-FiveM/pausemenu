function Statistics() {
    return (
        <>
         <div id="statistics_tab" className="split_grid_top">
          <div className="stats_title">
            <h1>Statistics</h1>
            <h2>Your stats in Season 1 of Stadium</h2>
          </div>

          {/* user name  */}
          <div className="a_stat username">
            <div className="stat_container">
              <div className="spacer"></div>
              <h1>User Name</h1>
            </div>
            <h1 className="stat">A RealYL LONG NAME ADADA</h1>
          </div>

          {/* account id */}
          <div className="a_stat">
            <div className="stat_container">
              <div className="spacer"></div>
              <h1>Account ID</h1>
            </div>
            <h1 className="stat">0</h1>
          </div>

          <div className="a_stat">
            <div className="stat_container">
              <div className="spacer"></div>
              <h1>Play Time</h1>
            </div>
            <h1 className="stat">0h</h1>
          </div>

          <div className="a_stat">
            <div className="stat_container">
              <div className="spacer"></div>
              <h1>Kills</h1>
            </div>
            <h1 className="stat">312222222222222222222222220</h1>
          </div>

        </div>
        </>
    )
}

export default Statistics;
