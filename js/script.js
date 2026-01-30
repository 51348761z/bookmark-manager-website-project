const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger menu event listener
menuBtn.addEventListener("click", navToggle);

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-soft-red",
      "border-b-4",
      "md:border-b-0",
    );
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Get the tab container
  const clickedTab = e.target.closest(".tab");

  // Activate the tab's inner div (children[0]) with border styling
  clickedTab.children[0].classList.add("border-soft-red", "border-b-4");

  // Show the corresponding panel
  const targetPanel = clickedTab.children[0].getAttribute("data-target");
  const panel = document.getElementById(targetPanel);
  panel.classList.replace("hidden", "flex");
}

function navToggle() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "../images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "../images/logo-bookmark.svg");
  }
}
