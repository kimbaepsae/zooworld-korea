// 햄버거 메뉴
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

// Nav 스크롤 효과
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 80);
});

// 모달
const modal = document.getElementById("contactModal");
document.querySelector(".btn").addEventListener("click", () => modal.classList.add("active"));
document.querySelector(".close-btn").addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("active"); });

// EmailJS 폼 전송
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const btn = document.querySelector(".send-btn");
  btn.disabled = true;
  btn.textContent = "전송 중...";

  emailjs.send("service_f9nukyg", "template_52iwlqu", {
    name:    document.getElementById("name").value,
    email:   document.getElementById("email").value,
    phone:   document.getElementById("phone").value,
    message: document.getElementById("message").value
  }).then(() => {
    alert("문의가 정상적으로 접수되었습니다.");
    this.reset();
    modal.classList.remove("active");
  }).catch(err => {
    console.error(err);
    alert("전송에 실패했습니다.");
  }).finally(() => {
    btn.disabled = false;
    btn.textContent = "문의하기";
  });
});
