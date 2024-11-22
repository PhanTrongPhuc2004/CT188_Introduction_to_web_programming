//tạo hiệu ứng slash cho icon mắt
document.getElementById('eye').addEventListener('click', function () {
    const passwordField = document.getElementById('loginPassword');
    const eyeIcon = document.querySelector('#eye i');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }

});

// Fetch dữ liệu từ file JSON và lưu vào localStorage  
fetch('../../../Data/user.json')
    .then(response => response.json())
    .then(users => {
        console.log(users)
        // Lưu dữ liệu người dùng vào localStorage  
        localStorage.setItem('users', JSON.stringify(users));
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });

// kiểm tra thông tin đăng nhập
const loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Lấy danh sách tài khoản từ LocalStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    let accounts2 = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra tài khoản và mật khẩu từ đăng ký đã lưu vào localstorage
    const user = accounts.find(acc =>
        acc.username === loginUsername && acc.password === loginPassword
    );
    // kiểm tra tài khoản và mật khẩu từ file json đã lưu vào localstorage
    const user2 = accounts2.find(acc =>
        acc.email === loginUsername && acc.matKhau === loginPassword
    );

    if (user || user2) {
        // alert('Đăng nhập thành công!');
        if (user) {
            // Lấy biến loggedUser trong local storage lên
            const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
            // lưu trạng thái đã đăng nhập bằng true
            storedUser.status = true;
            // lưu trạng vai trò người dùng
            // storedUser.vaiTro = user.vaiTro;
            // lưu lại thông tin người dùng
            storedUser.user = user;
            // lưu lại biến loggedUser vào trong local storage
            localStorage.setItem("loggedUser", JSON.stringify(storedUser));
        }
        if (user2) {
             // Lấy biến loggedUser trong local storage lên
             const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
             // lưu trạng thái đã đăng nhập bằng true
             storedUser.status = true;
             // lưu trạng vai trò người dùng
            // storedUser.vaiTro = user2.vaiTro;
             // lưu lại thông tin người dùng
             storedUser.user = user2;
             // lưu lại biến loggedUser vào trong local storage
             localStorage.setItem("loggedUser", JSON.stringify(storedUser));
        }
        window.location.replace('index.html'); // Chuyển hướng đến trang chủ
    } else {
        alert('Sai tên người dùng hoặc mật khẩu!');
    }

});
