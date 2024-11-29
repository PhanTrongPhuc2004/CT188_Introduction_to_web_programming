document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.getElementById('avatar');
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser?.status && loggedUser.user?.anhDaiDien) {
        avatar.src = loggedUser.user.anhDaiDien;
    } else {
        avatar.src = "/Data/Images/Avatar/Avatar/Account.png"; // Avatar mặc định
    }
});