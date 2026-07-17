window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
const modal = document.getElementById("contactModal");

document.querySelector(".btn").addEventListener("click", () => {
    modal.classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const sendBtn = document.querySelector(".send-btn");

    sendBtn.disabled = true;
    sendBtn.textContent = "전송 중...";

    emailjs.send(
        "service_f9nukyg",
        "template_52iwlqu",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value
        }

    ).then(() => {

        alert("문의가 정상적으로 접수되었습니다.");

        contactForm.reset();

        modal.classList.remove("active");

    }).catch((error) => {

        console.error(error);

        alert("전송에 실패했습니다.");

    }).finally(() => {

        sendBtn.disabled = false;
        sendBtn.textContent = "문의하기";

    });

});