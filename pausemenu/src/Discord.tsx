import Statistics from "./Statistics";
import DiscordLogo from "/DiscordLogo.png";

function Discord() {
  return (
    <>
      <div className="split_grid_spacer">
        <Statistics />
        <div id="discord_tab" className="split_grid_bottom">
          <div className="grid_item_desc">
            <h1>Our Discord</h1>
            <h2>Join our official Discord server</h2>
          </div>
          <div className="discord_stuff">
            <div className="discord_link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              <h1>discord.gg/</h1>
            </div>
            <div className="join_discord">
              <h1>Join Discord</h1>
            </div>
            <img className="discord_logo" src={DiscordLogo} alt="" />
            <img className="discord_logo" src={DiscordLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discord;
