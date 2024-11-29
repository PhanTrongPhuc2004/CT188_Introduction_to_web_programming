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

// Kiểm tra nếu dữ liệu người dùng trong localStorage chưa có thì mới nạp từ file JSON
fetch('../../../Data/user.json')
    .then(response => response.json())
    .then(users => {
        // Lấy danh sách người dùng cũ từ localStorage, nếu có
        let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Chỉ nạp dữ liệu từ file JSON vào localStorage nếu chưa có người dùng nào trong đó
        if (existingUsers.length === 0) {
            // Lưu dữ liệu từ file JSON vào localStorage
            localStorage.setItem('users', JSON.stringify(users)); 
        }
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });


// Kiểm tra thông tin đăng nhập
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
    // Kiểm tra tài khoản và mật khẩu từ file json đã lưu vào localstorage
    const user2 = accounts2.find(acc =>
        acc.email === loginUsername && acc.matKhau === loginPassword
    );

    if (user || user2) {
        // alert('Đăng nhập thành công!');
        if (user) {
            const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
            storedUser.status = true;
            storedUser.user = user;
            localStorage.setItem("loggedUser", JSON.stringify(storedUser));
        }
        if (user2) {
            const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
            storedUser.status = true;
            storedUser.user = user2;
            localStorage.setItem("loggedUser", JSON.stringify(storedUser));
        }
        window.location.replace('index.html'); // Chuyển hướng đến trang chủ
    } else {
        alert('Sai tên người dùng hoặc mật khẩu!');
    }
});

