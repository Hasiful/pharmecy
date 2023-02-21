// search input
const searchMediInput = document.getElementById("medicineOrder_searchInput");
searchMediInput.addEventListener("keyup", () => {
  let mediInputValue = searchMediInput.value.toUpperCase();

  let medItemText = document.getElementsByClassName("medicineOrder_name");
  [...medItemText].forEach((currentItem, i) => {
    let medicineMain = document.getElementsByClassName("medicine_order_item")[
      i
    ];
    let medicineName = currentItem.textContent || currentItem.innerHTML;
    if (medicineName.toUpperCase().indexOf(mediInputValue) > -1) {
      medicineMain.style.display = "";
    } else {
      medicineMain.style.display = "none";
    }
  });
});

// item
