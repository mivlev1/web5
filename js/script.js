
function total() {
  let price,value;
  price=document.getElementById('price').value;
  value=document.getElementById('value').value;
  const regular = /~^0+~^\d{1,}$/;
  if (!regular.test(price) || !regular.test(value) ){
  alert("Вводите числа и не исользуйте в начале нули");
  }
  let totalResult = document.getElementById('result');
  totalResult.innerHTML = parseInt(price) * parseInt(value);
  return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("result-btn");
  b.addEventListener("click", total);
});

