// ĐÂY LÀ FILE JS CHUNG CHO CÁC TRANG CÒN LẠI

// Chèn phần header từ header.js vào các trang
const headerElement = document.getElementById('header');
headerElement.innerHTML = headerHTML;

// Chèn phần footer từ footer.js vào các trang
const footerElement = document.getElementById('footer');
footerElement.innerHTML = footerHTML;

// Phần làm rỗng biến loggedUser khi chọn đăng xuất
const logoutButton = document.getElementById('logout_button');
logoutButton.addEventListener('click', () => {
  // Lấy biến loggedUser trong local storage lên
  let stored_User = JSON.parse(localStorage.getItem("loggedUser"));
  // lưu trạng thái đã đăng nhập bằng false
  stored_User.status = false;
  // làm rỗng lại thông tin người dùng
  stored_User.user = {};
  // làm rỗng lại giỏ hàng người dùng
  stored_User.cart = {};
  // làm rỗng lại đơn hàng người dùng
  stored_User.order = {};
  // lưu lại biến loggedUser vào trong local storage
  localStorage.setItem("loggedUser", JSON.stringify(stored_User));
});

// Phần ẩn nút Quản lý trên header nếu không là admin 
let stored_User = JSON.parse(localStorage.getItem("loggedUser"));

if (stored_User.status == false) {

  let elementAdmin_button = document.getElementById('admin_button');
  let elementIcon_cart_order = document.getElementById('icon_cart_order');

  elementIcon_cart_order.style.display = 'none';
  elementAdmin_button.style.display = 'none';
}
else {
  let elementAdmin_button = document.getElementById('admin_button');
  elementAdmin_button.style.display = 'none';
  if (stored_User.user.vaiTro === 'admin') {
    elementAdmin_button.style.display = 'block';
  }
}