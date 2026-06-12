function toggleDark() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

/* Apply saved theme on every page */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}



const modal = document.getElementById("learnModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        modalTitle.textContent = btn.dataset.title;
        modalContent.textContent = btn.dataset.content;
        modal.classList.add("active");
    });
});

document.querySelector(".close-modal").onclick = () => {
    modal.classList.remove("active");
};

modal.onclick = e => {
    if (e.target === modal) modal.classList.remove("active");
};



