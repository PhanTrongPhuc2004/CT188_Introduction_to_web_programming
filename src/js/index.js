// ĐÂY LÀ FILE JS CHO TRANG CHỦ

// Chèn phần header từ header.js vào trang chủ
const headerElement = document.getElementById('header');
headerElement.innerHTML = headerHTML;

// Chèn phần footer từ footer.js vào trang chủ
const footerElement = document.getElementById('footer');
footerElement.innerHTML = footerHTML;

// Phần js cho 2 nút chuyển ảnh đầu trang chủ
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function
  showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slides[slideIndex - 1].style.display = "block";
}

// Phần tạo biến loggedUser cho trang chủ nếu chưa có trong local storage
// Kiểm tra xem đã tồn tại biến loggedUser trong localStorage chưa
const storedUser = localStorage.getItem("loggedUser");

// Nếu chưa tồn tại, tạo và lưu
if (!storedUser) {
  const loggedUser = {
    status: false,
    // vaTro: '',
    user: {},
    cart: {},
    order: {}
  };
  localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
}

//Lấy danh sách sp ra và bỏ vào local stogare nếu chưa có trong local storage trước
let Products = JSON.parse(localStorage.getItem("products"));
// console.log(productList);
if (!Products) {
localStorage.setItem('products', JSON.stringify(products));
}

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
