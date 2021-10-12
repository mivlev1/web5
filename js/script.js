
function total() {
  let price,value;
  price=document.getElementById("price").value;
  value=document.getElementById("value").value;
  //const regular = /^[1-9][0-9]*$^\d{1,}$/;
  const regular =/^[1-9][0-9]*$/;
 // const regular2 = /^[1-9][0-9]*$/;
  if (!regular.test(price) || !regular.test(value) ){
  alert("Вводите только положительные числа");
  return true;
  }
  // else if(!regular2.test(price)&&!regular2.test(value))
  // {
  //   alert("Значения не введены");
  //   return true;
  // }
  let totalResult = document.getElementById("result");
  totalResult.innerHTML = parseInt(price) * parseInt(value);
  return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("result-btn");
  b.addEventListener("click", total);
});

