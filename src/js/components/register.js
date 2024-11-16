//tạo hiệu ứng slash cho icon mắt nhập pass
document.getElementById('eye1').addEventListener('click', function () {
    const passwordField1 = document.getElementById('registerPassword');
    const eyeIcon = document.querySelector('#eye1 i');

    if (passwordField1.type === "password") {
        passwordField1.type = "text";
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        passwordField1.type = "password";
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }
   
});
//tạo hiệu ứng slash cho icon mắt xác nhận pass
document.getElementById('eye2').addEventListener('click', function () {
    const confirmPasswordField = document.getElementById('confirmRegisterPassword');
    const eyeIcon = document.querySelector('#eye2 i');

    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        eyeIcon.classList.remove('bi-eye');
        eyeIcon.classList.add('bi-eye-slash');
    } else {
        confirmPasswordField.type = "password";
        eyeIcon.classList.remove('bi-eye-slash');
        eyeIcon.classList.add('bi-eye');
    }
   
});

const form = document.getElementById('form-register');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmRegisterPassword').value.trim();
    //ràng buộc tài khoản chỉ được nhập chữ và số, phải có đuôi @gmail.com
    const usernameRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    if (!usernameRegex.test(username)) {
        alert('Tên đăng nhập phải bắt đầu bằng chữ cái hoặc số và kết thúc bằng "@gmail.com"!');
        return;
    }
    // Ràng buộc mật khẩu: ít nhất 8 ký tự, chỉ chứa chữ cái và số
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Mật khẩu phải có ít nhất 8 ký tự và chỉ chứa chữ cái và số!');
        return;
    }

    if (username && password && confirmPassword) {
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        //kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
        } else {
            const isExistingUser = accounts.some(account => account.username === username);

            if (isExistingUser) {
                alert('Tên người dùng đã tồn tại!');
            } else {
                accounts.push({ username, password });
                localStorage.setItem('accounts', JSON.stringify(accounts));
                alert('Đăng ký thành công!');

                // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
                window.location.href = 'http://127.0.0.1:5500/src/components/pages/login.html';
            }
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});