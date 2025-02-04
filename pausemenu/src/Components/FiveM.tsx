export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

interface Button {
  id: string;
  link: string;
  label: string;
}

function handleDiscordJoin(button: Button) {
  if (button.link != null && button.id === "discord") {
    console.log("Link: " + button.link);
    console.log("Opening Discord In Browser");

    if (isEnvBrowser()) {
      // In regular browser?
      window.open(button.link, "_blank");
    } else {
      window.invokeNative("openUrl", button.link);
    }
  }
}

function sendToLua(action: any, data: any) {
  // In regular browser?
  if (isEnvBrowser()) {
    console.warn("Not sending data to Lua cause we're devving bro")
    return;
  }

  const resourceName = (window as any).GetParentResourceName();

  fetch(`https://${resourceName}/${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ data }),
  })
    .then((resp) => resp.json())
    .then();
}

function FiveM(button: Button) {
  console.log("Label: " + button.label);
  console.log("ID: " + button.id);
  handleDiscordJoin(button);

  sendToLua("doLuaAction", button);
}

export default FiveM;
