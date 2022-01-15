const loginBtn = document.querySelector("#login");
const userName = document.querySelector("#username");

loginBtn.addEventListener('click', () => {
    alert(`${userName.value}! Your form has been submitted.`);
});