interface Button {
  id: string;
  link: string;
  label: string;
}

function FiveM(button: Button) {
  console.log("Label: " + button.label);
  console.log("ID: " + button.id);
  if (button.link != null)
  {
    console.log("Link: " + button.link)
  }
}

export default FiveM;
