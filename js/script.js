function total() {
  let price;
  let value;
  price=document.getElementById("price").value;
  value=document.getElementById("value").value;
  const regular =/^[1-9][0-9]*$/;
  if (!regular.test(price) || !regular.test(value) ){
  alert("Вводите только положительные целые числа");
  return true;
  }
  let totalResult = document.getElementById("result");
  totalResult.innerHTML = parseInt(price) * parseInt(value);
  return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("result-btn");
  b.addEventListener("click", total);
});

