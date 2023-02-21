// sidebar js
const sidebarLink = document.getElementsByClassName("sidebar_nav_link");

[...sidebarLink].forEach((sideCollapse, index) => {
  const sidebarItem =
    document.getElementsByClassName("sidebar_nav_item")[index];
  sideCollapse.addEventListener("click", () => {
    let reverseClass = document.querySelector(".showSubNav");
    if (!sidebarItem.classList.contains("showSubNav") && reverseClass) {
      reverseClass.classList.remove("showSubNav");
    }
    sidebarItem.classList.toggle("showSubNav");
  });
});

// toggle nav

let dashBtn = document.getElementById("dashboard_toggle");
let sideBar = document.getElementById("siderbar_main");

dashBtn.addEventListener("click", function () {
  sideBar.classList.toggle("showNav");
  this.classList.toggle("activeToggle");
});

// search generic list
const genericViewBtn = document.getElementById("generic_viewBtn");
const genericViewDropdown = document.getElementById("genericDropdown_view");

genericViewBtn.addEventListener("click", () => {
  genericViewDropdown.classList.toggle("genericViewToggle");
});

const genericInput = document.getElementById("search_genericInput");

genericInput.addEventListener("keyup", () => {
  let genericInValue = genericInput.value;
  let genericValueFilter = genericInValue.toUpperCase();
  // generic list
  const genericList = document.getElementById("search_genericList");
  // generic list item
  let genericListItem = genericList.children;
  [...genericListItem].forEach((genericItem) => {
    let genericItemContent = genericItem.textContent || genericItem.innerHTML;
    if (genericItemContent.toUpperCase().indexOf(genericValueFilter) > -1) {
      genericItem.style.display = "";
    } else {
      genericItem.style.display = "none";
    }
  });
});
