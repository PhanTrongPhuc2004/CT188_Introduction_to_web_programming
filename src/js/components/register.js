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

    const email = document.getElementById('registerUsername').value.trim();
    const matkhau = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmRegisterPassword').value.trim();

    // Ràng buộc tài khoản chỉ được nhập chữ và số, phải có đuôi @gmail.com
    const usernameRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
    if (!usernameRegex.test(email)) {
        alert('Tên đăng nhập phải bắt đầu bằng chữ cái hoặc số và kết thúc bằng "@gmail.com"!');
        return;
    }

    // Ràng buộc mật khẩu: ít nhất 8 ký tự, chỉ chứa chữ cái và số
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    if (!passwordRegex.test(matkhau)) {
        alert('Mật khẩu phải có ít nhất 8 ký tự và chỉ chứa chữ cái và số!');
        return;
    }

    if (email && matkhau && confirmPassword) {
        // Lấy danh sách người dùng từ localStorage (nếu có) hoặc khởi tạo mảng trống
        let users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('Trước khi thêm:', users); // Kiểm tra danh sách người dùng hiện tại

        // Kiểm tra mật khẩu và xác nhận mật khẩu
        if (matkhau !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp!');
        } else {
            // Kiểm tra xem email đã tồn tại trong danh sách hay chưa
            const isExistingUser = users.some(account => account.email === email);
            
            if (isExistingUser) {
                alert('Tên người dùng đã tồn tại!');
            } else {
                // Tạo đối tượng người dùng mới
                const newUser = {
                    id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // Tạo ID tự động
                    hoTen: "",
                    gioiTinh: "",
                    ngaySinh: "", 
                    diaChi: "",
                    vaiTro: "user",
                    email: email,
                    matKhau: matkhau,
                    soDienThoai: "",
                    anhDaiDien: "",
                    trangThai: ""
                };
                users.push(newUser);
                console.log('Sau khi thêm:', users); // Kiểm tra danh sách sau khi thêm

                // Lưu lại danh sách người dùng vào localStorage
                localStorage.setItem('users', JSON.stringify(users));
                console.log('Dữ liệu trong localStorage:', localStorage.getItem('users')); // Kiểm tra dữ liệu trong localStorage

                alert('Đăng ký thành công!');

                // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
                window.location.href = 'http://127.0.0.1:5500/src/components/pages/login.html';
            }
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});
