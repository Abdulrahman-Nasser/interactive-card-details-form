let cardholder = document.querySelector(".cardholder");
let btnConfirm = document.querySelector(".btn");
let allInputs = document.querySelectorAll("input");
let span1 = document.querySelector(".card-number");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let cvc = document.querySelector(".cvcnumber");
let mode = 1;

btnConfirm.addEventListener("click", function () {
  if (mode == 2) {
    mode = 1;
    $(".confirm-item").hide();
    $(".form").show();
    btnConfirm.innerHTML = "confirm";
    cardholder.innerHTML = "";
    monthInput.innerHTML = "";
    yearInput.innerHTML = "";
    cvc.innerHTML = "";
    span1.innerHTML = "";
  } else {
    if ( allInputs[1].value.length == 16 && allInputs[0].value != "" && allInputs[2].value != "" && allInputs[2].value <= 12 && allInputs[3].value.length == 4 && allInputs[4].value.length == 3) {
      cardholder.innerHTML = allInputs[0].value;
      monthInput.innerHTML = allInputs[2].value;
      yearInput.innerHTML = "/" + allInputs[3].value;
      cvc.innerHTML = allInputs[4].value;
      $(".form").hide();
      $(".confirm-item").show();
      btnConfirm.innerHTML = "continue";
      mode = 2;

      clearValue();
    } 
    else if (allInputs[0].value == "") {
      alert("you have to  fill all data");
      allInputs[0].value = "";
    } 
    else if ( allInputs[1].value.length != 16 ) {
      alert("please add 16 numbers not less or more");
    } 
    else if(allInputs[2].value > 12 || allInputs[2].value == ""){
        alert("you have to enter a correct month")
    }
    else if (allInputs[3].value.length != 4) {
      alert("you have enter a correct year");
    }
     else if (allInputs[4].value.length != 3) {
      alert("you have enter any 3 numbers for cvc ");
    } 
  }
});

allInputs[1].addEventListener("input", function () {
  if (allInputs[1].value.length > 16) {
    alert("you can not add less or more than 16 numbers");
  } else {
    let joy = allInputs[1].value.match(/.{1,4}/g);
    span1.innerHTML = joy.join(" ");
  }
});

function clearValue() {
  allInputs[0].value = "";
  allInputs[1].value = "";
  allInputs[2].value = "";
  allInputs[3].value = "";
  allInputs[4].value = "";
}

wow = new WOW({
    boxClass: "animate__animated", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();