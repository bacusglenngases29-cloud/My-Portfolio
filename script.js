const proceedBtn = document.getElementById("proceedBtn");
const welcome = document.getElementById("welcome");
const portfolioContent = document.getElementById("portfolioContent");

if (proceedBtn && welcome && portfolioContent) {
    proceedBtn.addEventListener("click", function() {
        welcome.style.display = "none";
        portfolioContent.classList.remove("hidden");
        portfolioContent.style.display = "block";
        portfolioContent.style.visibility = "visible";
    });
}

const viewButton = document.getElementById("viewProjectsBtn");
const projectSection = document.getElementById("projectSection");

if (viewButton && projectSection) {
    viewButton.addEventListener("click", function() {
        projectSection.hidden = !projectSection.hidden;

        if (projectSection.hidden) {
            viewButton.textContent = "View all";
        } else {
            viewButton.textContent = "Hide Projects";
        }
    });
}