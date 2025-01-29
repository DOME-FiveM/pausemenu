interface Button {
  id: string;
  link: string;
  label: string;
}

function FiveM(button: Button) {
  console.log("Clicked button");
  console.log("Label: " + button.label);
  console.log("ID: " + button.id);
  console.log("Link: " + button.link)

  
}

export default FiveM;
