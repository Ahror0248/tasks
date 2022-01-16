let b = false;

function handleClick() {
  let r = "";
  if (!b) {
    document.getElementById("dr").style.transform = "rotate(180deg)";
    b = true;
  } else {
    document.getElementById("dr").style.transform = "rotate(0deg)";
    b = false;
  }
}

let b2 = false;

function handleClick2() {
  let r = "";

  if (!b2) {
    document.getElementById("dr2").style.transform = "rotate(180deg)";
    b2 = true;
  } else {
    document.getElementById("dr2").style.transform = "rotate(0deg)";

    b2 = false;
  }
}

let b3 = false;

function handleClick3() {
  let r = "";

  if (!b3) {
    document.getElementById("dr3").style.transform = "rotate(180deg)";
    b3 = true;
  } else {
    document.getElementById("dr3").style.transform = "rotate(0deg)";

    b3 = false;
  }
}

