const colors = {
  "Turquoise": "1abc9c",
  "Emerald": "2ecc71",
  "Peter River": "3498db",
  "Amethyst": "9b59b6",
  "Wet Asphalt": "34495e",
  "Green Sea": "16a085",
  "Nephritis": "27ae60",
  "Belize Hole": "2980b9",
  "Wisteria": "8e44ad",
  "Midnight Blue": "2c3e50",
  "Sun Flower": "f1c40f",
  "Carrot": "e67e22",
  "Alizarin": "e74c3c",
  "Clouds": "ecf0f1",
  "Concrete": "95a5a6",
  "Orange": "f39c12",
  "Pumpkin": "d35400",
  "Pomegranate": "c0392b",
  "Silver": "bdc3c7",
  "Asbestos": "7f8c8d"
};

function getFormat() {
  return document.getElementById('format').value;
}

function hexToRgb(hex) {
  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function select(e) {
  const format = getFormat();
  let color = e.target.dataset.color;
  const { r, g, b } = hexToRgb(color);

  if (format === "hexhash") {
    color = '#' + color;
  }

  if (format === "rgb") {
    color = `rgb(${r},${g},${b})`;
  }
  else if (format === "rgba") {
    color = `rgba(${r},${g},${b},1.0)`;
  }

  document.getElementById('color').value = color;
  document.getElementById('color').select();
}

Object.keys(colors).forEach(function(key) {
  var color = colors[key];

  var element = document.createElement("div");
  element.className = "colors-item";
  element.style.backgroundColor = '#' + color;
  element.dataset.color = color;
  element.addEventListener("click", select);
  element.innerHTML = '<span class="colors-item-label">' + key + '</span>';
  document.getElementById('colors').appendChild(element);
});
