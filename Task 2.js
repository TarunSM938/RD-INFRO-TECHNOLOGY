document.addEventListener("DOMContentLoaded", () => {
    // Form submission
    const form = document.getElementById("query-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We’ll get back to you soon.");
        form.reset();
    });

    // scrolling effect
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
