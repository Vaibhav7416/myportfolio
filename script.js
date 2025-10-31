document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Allow normal navigation for external links
        if (!href.startsWith("#")) return;

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#ffcc00";
        link.style.transform = "scale(1.1)";
    }
});

if (document.title.includes("Portfolio")) {
    const heading = document.querySelector("h2");
    if (heading) {
        let text = heading.textContent;
        heading.textContent = "";
        let i = 0;
        const typing = setInterval(() => {
            heading.textContent += text[i];
            i++;
            if (i === text.length) clearInterval(typing);
        }, 100);
    }
}


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    observer.observe(card);
});


const topButton = document.createElement("button");
topButton.textContent = "⬆";
topButton.id = "topButton";
topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "10px 15px";
topButton.style.fontSize = "18px";
topButton.style.background = "#ffcc00";
topButton.style.color = "black";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
