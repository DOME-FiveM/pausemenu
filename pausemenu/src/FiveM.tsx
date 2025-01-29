interface Button {
  id: string;
  label: string;
}

function FiveM(button: Button) {
  console.log("Clicked button");
  console.log("Label: " + button.label);
  console.log("ID: " + button.id);
}

export default FiveM;
