const headerElement = document.getElementById('header');
headerElement.innerHTML = headerHTML;

// Chèn phần footer từ footer.js vào các trang
const footerElement = document.getElementById('footer');
footerElement.innerHTML = footerHTML;

// Lưu dữ liệu vào localStorage nếu chưa có
if (!localStorage.getItem('cartsList')) {
    localStorage.setItem('cartsList', JSON.stringify(carts));
}

// Cập nhật loggedUser với các carts
function getUserCarts() {
    // Lấy thông tin loggedUser từ localStorage
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    // Lấy danh sách carts từ localStorage
    const cartList = JSON.parse(localStorage.getItem("cartsList"));

    if (loggedUser && loggedUser.user?.id && cartList) {
        // Lọc các đơn hàng có `maKhachHang` trùng với `loggedUser.user.id`
        const userCart = cartList.filter(cart => parseInt(cart.maKhachHang) === parseInt(loggedUser.user.id));
        console.log("1");
        loggedUser.cart = userCart;
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        // Trả về danh sách đơn hàng của người dùng
        return userCart;
    }
    return [];
}

const userCarts = getUserCarts();

// Khởi tạo ứng dụng
function init() {
    setupEventListeners();
    displayCarts();
}

// Thiết lập các sự kiện
function setupEventListeners() {
    // Thêm các sự kiện chung, chẳng hạn như sự kiện trên các nút "Chi tiết" và "Xóa"
    document.getElementById('product-items-container').addEventListener('click', function (event) {
        const productId = event.target.getAttribute('data-id');
        if (event.target.classList.contains('btn-info')) {
            showProductDetails(productId);
        } else if (event.target.classList.contains('text-danger')) {
            deleteProduct(productId);
        } else if (event.target.classList.contains('btn-increase')) {
            updateQuantity(productId, 1);
        } else if (event.target.classList.contains('btn-decrease')) {
            updateQuantity(productId, -1);
        }
    });
}

// Cập nhật số lượng sản phẩm
function updateQuantity(productId, change) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userCart = loggedUser.cart || [];

    // Tìm sản phẩm cần cập nhật
    const product = userCart.find(p => parseInt(p.id) === parseInt(productId));
    if (product) {
        // Cập nhật số lượng (không cho nhỏ hơn 1)
        product.soLuong = Math.max(1, product.soLuong + change);

        // Lưu thay đổi vào loggedUser
        loggedUser.cart = userCart;
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        // Cập nhật lại cartList gốc
        updateCartList(userCart);

        // Hiển thị lại giao diện
        displayCarts();
    }
}

// Xóa sản phẩm
function deleteProduct(productId) {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let userCart = loggedUser.cart || [];

    // Lọc bỏ sản phẩm khỏi giỏ hàng
    userCart = userCart.filter(p => parseInt(p.id) !== parseInt(productId));

    // Lưu thay đổi vào loggedUser
    loggedUser.cart = userCart;
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    // Cập nhật lại cartList gốc và loại bỏ sản phẩm đã xóa
    updateCartList(userCart);

    // Hiển thị lại giao diện
    displayCarts();
}

// Cập nhật cartList gốc trong localStorage
function updateCartList(userCart) {
    let cartList = JSON.parse(localStorage.getItem("cartsList")) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    // Lọc bỏ các sản phẩm không còn trong giỏ hàng
    cartList = cartList.filter(cart => {
        if (parseInt(cart.maKhachHang) === parseInt(loggedUser.user.id)) {
            return userCart.some(p => p.id === cart.id);
        }
        return true;
    });

    // Lưu lại cartList vào localStorage
    localStorage.setItem("cartsList", JSON.stringify(cartList));
}

// Hiển thị danh sách sản phẩm
function displayCarts() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userCart = loggedUser.cart || [];
    const productContainer = document.getElementById('product-items-container');
    productContainer.innerHTML = ''; // Xóa nội dung cũ

    userCart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'd-flex border border-2 rounded-3 pb-3 mb-3';
        productElement.innerHTML = `
            <img src="${product.anhBia}" alt="${product.ten}" class="product-img m-3">
            <div class="flex-grow-1">
                <h5 class="product-title">${product.ten}</h5>
                <p>${product.gia.toLocaleString()}đ</p>
                <p>${product.moTa}</p>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm me-2 btn-decrease" data-id="${product.id}">-</button>
                    <input type="text" value="${product.soLuong}" class="form-control form-control-sm text-center" style="width: 50px;" readonly>
                    <button class="btn btn-outline-secondary btn-sm ms-2 btn-increase" data-id="${product.id}">+</button>
                    <button class="btn btn-info btn-sm ms-2" data-id="${product.id}">Chi tiết</button>
               
                    
                </div>
            </div>
                <div class="fw-bold">
                <div style="margin-bottom: 70px; font-size:1em;">
                ${(product.gia * product.soLuong).toLocaleString()}đ
                </div>
                <button class="text-danger ms-auto rounded me-3" data-id="${product.id}">Xóa đơn hàng</button>
                </div>
         `;
        productContainer.appendChild(productElement);
    });
    // Hiển thị bill
    displayBill();
    // Cập nhật tổng giá trị giỏ hàng
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = calculateTotalAmount(userCart).toLocaleString() + 'đ';
}

// Hiển thị danh sách sản phẩm
function displayBill() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userCart = loggedUser.cart || [];
    const carttotalsbody = document.getElementById('cart-totals-body');
    carttotalsbody.innerHTML = ''; // Xóa nội dung cũ

    userCart.forEach(product => {
        const productElement = document.createElement('tr');
        productElement.innerHTML = `
                <td>${product.ten}</td>
                <td class="text-center">${product.soLuong}</td>
                <td class ="text-end ">
                       ${(product.gia * product.soLuong).toLocaleString()}đ
                </td>
         `;
        carttotalsbody.appendChild(productElement);
    });
}

// Tính tổng giá trị giỏ hàng
function calculateTotalAmount(cart) {
    return cart.reduce((total, product) => total + product.gia * product.soLuong, 0);
}


// Hiển thị chi tiết sản phẩm
function showProductDetails(productId) {
    const product = userCarts.find(p => parseInt(p.id) === parseInt(productId));

    if (product) {
        // Hiển thị chi tiết sản phẩm trong modal
        document.getElementById('modalProductImage').src = product.anhBia;
        document.getElementById('modalProductName').innerText = product.ten;
        document.getElementById('modalProductPrice').innerText = product.gia.toLocaleString() + 'đ';
        document.getElementById('modalProductDescription').innerText = product.moTa;

        // Hiển thị modal
        const modal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
        modal.show();
    } else {
        alert('Sản phẩm không tìm thấy!');
    }
}

function getCurrentTime() {
    const now = new Date();

    // Lấy giờ, phút, giây và đảm bảo chúng có định dạng 2 chữ số
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Trả về chuỗi thời gian theo định dạng HH:MM:SS
    return `${hours}:${minutes}:${seconds}`;
}
// Lưu đơn hàng và xóa giỏ hàng
function checkout() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const userCart = loggedUser.cart || [];

    if (userCart.length === 0) {
        alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán!");
        return;
    }

    // Lấy danh sách đơn hàng hiện tại
    let ordersList = JSON.parse(localStorage.getItem("orders")) || orders;
    // thêm vào thời điểm bắt đầu thêm trên máy
    const currentDateTime = new Date();
    var ngayDangKy = currentDateTime.toLocaleDateString("en-CA");
    // Lấy và in thời gian hiện tại
    const currentTime = getCurrentTime();
    console.log(currentTime);  // Ví dụ kết quả: 14:30:45
    // Tạo đơn hàng mới
    const newOrder = {
        id: Date.now(), // ID duy nhất cho đơn hàng
        maKhachHang: loggedUser.user.id,
        sanPham: userCart,
        gioDatHang: currentTime,
        ngayDatHang: ngayDangKy,
        tongTien: calculateTotalAmount(userCart),
        trangThaiDonHang: "Đang chờ xử lý",
        trangThaiThanhToan: "Đã thanh toán",
    };

    // Thêm đơn hàng mới vào danh sách
    ordersList.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(ordersList));

    // Xóa giỏ hàng
    loggedUser.cart = [];
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    updateCartList([]); // Xóa dữ liệu từ cartList gốc

    // Điều hướng đến trang order
    alert("Đơn hàng của bạn đã được tạo thành công!");
    window.location.href = "src/components/pages/order.html"; // Điều hướng đến trang order
}

// Gắn sự kiện vào nút Thanh toán
document.getElementById("checkout-btn").addEventListener("click", checkout);

// Khởi động ứng dụng
document.addEventListener('DOMContentLoaded', init);