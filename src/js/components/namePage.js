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


const loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Lấy danh sách tài khoản từ LocalStorage
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    console.log(accounts)
    let accounts2 = JSON.parse(localStorage.getItem('users')) || [];
    console.log(accounts, accounts2);
    console.log(accounts2)

    // Kiểm tra tài khoản và mật khẩu
    const user = accounts.find(account =>
        account.username === loginUsername && account.password === loginPassword
    );
    const user2 = accounts2.find(user =>
        user.email === loginUsername && user.matKhau === loginPassword
    );
    console.log("ĐK: "+user, "ĐN: "+user2); 

    if (user || user2) {
        alert('Đăng nhập thành công!');
        
        window.location.replace('index.html'); // Chuyển hướng đến trang chủ
    } else {
        alert('Sai tên người dùng hoặc mật khẩu!');
    }
});
