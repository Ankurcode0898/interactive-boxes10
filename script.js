const boxes = document.querySelectorAll(".interactive-box");

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    boxes.forEach((b) => {
      if (b !== box) b.classList.remove("expanded");
    });
    box.classList.toggle("expanded");
    e.stopPropagation();
  });

  box.querySelectorAll(".color-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      box.style.backgroundColor = btn.dataset.color;
    });
  });

  box.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const size = btn.dataset.size;
      if (size === "small") {
        box.style.fontSize = "14px";
      } else if (size === "medium") {
        box.style.fontSize = "18px";
      } else {
        box.style.fontSize = "22px";
      }
    });
  });
});
