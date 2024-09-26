function handleTriangle() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const baseField = document.createElement("div");
  baseField.setAttribute("class", "field");

  const labelBaseText = document.createElement("label");
  labelBaseText.innerText = "Base: ";
  labelBaseText.setAttribute("class", "label");
  labelBaseText.setAttribute("for", "base");

  const baseInputBox = document.createElement("input");
  baseInputBox.placeholder = "Enter the Base";
  baseInputBox.setAttribute("class", "input");
  baseInputBox.setAttribute("type", "number");
  baseInputBox.setAttribute("id", "base");

  baseField.append(labelBaseText, baseInputBox);

  const heightField = document.createElement("div");
  heightField.setAttribute("class", "field");

  const heightFieldText = document.createElement("label");
  heightFieldText.innerText = "Height: ";
  heightFieldText.setAttribute("class", "label");
  heightFieldText.setAttribute("for", "height");

  const heightInputBox = document.createElement("input");
  heightInputBox.placeholder = "Enter the Width ";
  heightInputBox.setAttribute("class", "input");
  heightInputBox.setAttribute("type", "number");
  heightInputBox.setAttribute("id", "height");

  const button = document.createElement("button");
  button.innerText = "calculate";
  button.setAttribute("class", "button");

  heightField.append(heightFieldText, heightInputBox);
  container.append(baseField, heightField, button);
  button.onclick = () => {
    const base = Number(document.getElementById("base").value);
    const height = Number(document.getElementById("height").value);
    const result = document.getElementById("result");
    result.innerHTML = `<p>The Area Of rectangle is ${0.5 * base * height}</p>`;
  };
}

function handleRectangle() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const lengthField = document.createElement("div");
  lengthField.setAttribute("class", "field");

  const labelLengthText = document.createElement("label");
  labelLengthText.innerText = "Length: ";
  labelLengthText.setAttribute("class", "label");
  labelLengthText.setAttribute("for", "length");
  const lengthInputBox = document.createElement("input");
  lengthInputBox.placeholder = "Enter the Length";
  lengthInputBox.setAttribute("class", "input");
  lengthInputBox.setAttribute("type", "number");
  lengthInputBox.setAttribute("id", "length");

  lengthField.append(labelLengthText, lengthInputBox);

  const widthField = document.createElement("div");
  widthField.setAttribute("class", "field");

  const widthFieldText = document.createElement("label");
  widthFieldText.innerText = "Width: ";
  widthFieldText.setAttribute("class", "label");
  widthFieldText.setAttribute("for", "width");

  const widthInputBox = document.createElement("input");
  widthInputBox.placeholder = "Enter the Width ";
  widthInputBox.setAttribute("class", "input");
  widthInputBox.setAttribute("type", "number");
  widthInputBox.setAttribute("id", "width");

  const button = document.createElement("button");
  button.innerText = "calculate";
  button.setAttribute("class", "button");

  widthField.append(widthFieldText, widthInputBox);

  container.append(lengthField, widthField, button);

  button.onclick = () => {
    const length = Number(document.getElementById("length").value);
    const width = Number(document.getElementById("width").value);
    const result = document.getElementById("result");
    result.innerHTML = `<p>The Area Of Triangle is ${length * width}</p>`;
  };
}

function handleCircle() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  const radiusField = document.createElement("div");
  radiusField.setAttribute("class", "field");

  const labelRadiusText = document.createElement("label");
  labelRadiusText.innerText = "Radius: ";
  labelRadiusText.setAttribute("class", "label");
  labelRadiusText.setAttribute("for", "radius");

  const radiusInputBox = document.createElement("input");
  radiusInputBox.placeholder = "Enter the Radius";
  radiusInputBox.setAttribute("class", "input");
  radiusInputBox.setAttribute("type", "number");
  radiusInputBox.setAttribute("id", "radius");

  radiusField.append(labelRadiusText, radiusInputBox);
  const button = document.createElement("button");
  button.innerText = "calculate";
  button.setAttribute("class", "button");
  container.append(radiusField, button);

  button.onclick = () => {
    const radius = Number(document.getElementById("radius").value);
    const result = document.getElementById("result");
    result.innerHTML = `<p>The Area Of Circle is ${radius * radius * 3.14}</p>`;
  };
}
