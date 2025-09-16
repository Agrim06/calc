let display = document.getElementById("display");

function appendChar(char){
  if (display.innerText === "0") display.innerText = "";
  display.innerText += char;
}

function clearDisplay(){
    display.innerText="0";
}

function deleteChar(){
    if(display.innerText.length > 1){
        display.innerText = display.innerText.slice(0,-1);
    }
    else{
        display.innerText="0";
    }
}

function doCalculate() {
  try {
    let expression = display.innerText.replace(/÷/g, "/").replace(/×/g, "*");
    let result = eval(expression);
     if (!isFinite(result)) {
      display.innerText = "Error";
    } else {
      display.innerText = parseFloat(result.toFixed(4));
    }

  } catch {
    display.innerText = "Error";
  }
}