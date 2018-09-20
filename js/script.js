var button = document.querySelector(".button-search");
var popup = document.querySelector(".form-hotel");
var form = popup.querySelector(".form-hotel-items");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");

var isStorageSupport = true;
var storage = "";
  try {
    storage = localStorage.getItem("date-in");
    storage = localStorage.getItem("date-out");
  } catch (err) {
    isStorageSupport = false;
  };



button.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("form-hotel-show");
} if (storage) {
      dateIn.value = storage;
      dateOut.value = storage;
    });

form.addEventListener("submit", function (evt) {
if (!dateIn.value || !dateOut.value) {
evt.preventDefault();
popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("date-in", dateIn.value);
      localStorage.setItem("date-out", dateOut.value); }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-hotel-show")) {
      popup.classList.remove("form-hotel-show");
      popup.classList.remove("modal-error");
    }
  }
});
