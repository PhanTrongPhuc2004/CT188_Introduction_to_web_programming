const headerElement = document.getElementById('header');
headerElement.innerHTML = header_customerHTML;

// Chèn phần footer từ footer.js vào các trang
const footerElement = document.getElementById('footer');
footerElement.innerHTML = footerHTML;

// Khởi tạo dữ liệu sản phẩm từ localStorage hoặc từ product.js
let productData = JSON.parse(localStorage.getItem('products')) || products;

// Lưu dữ liệu vào localStorage nếu chưa có
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Khởi tạo ứng dụng
function init() {
    setupEventListeners();
    displayProducts();
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

// Hàm tăng/giảm số lượng sản phẩm
function updateQuantity(productId, change) {
    const product = productData.find(p => parseInt(p.id) === parseInt(productId));
    if (product) {
        product.soLuong = Math.max(1, product.soLuong + change); // Số lượng không được nhỏ hơn 1
        localStorage.setItem('products', JSON.stringify(productData));
        displayProducts(); // Cập nhật lại giao diện và tổng giá trị
    }
}

// Hiển thị danh sách sản phẩm
function displayProducts() {
    console.log("test1");
    const productContainer = document.getElementById('product-items-container');
    productContainer.innerHTML = ''; // Xóa nội dung cũ

    productData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'd-flex border border-2 rounded-3 pb-3 mb-3';
        productElement.innerHTML = `
             <img src="${product.anhBia}" alt="${product.ten}" class="product-img me-3">
            <div class="flex-grow-1">
                <h5 class="product-title">${product.ten}</h5>
                <p>${product.gia.toLocaleString()}đ</p>
                <p>${product.moTa}</p>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm me-2 btn-decrease" data-id="${product.id}">-</button>
                    <input type="text" value="${product.soLuong}" class="form-control form-control-sm text-center" style="width: 50px;" readonly>
                    <button class="btn btn-outline-secondary btn-sm ms-2 btn-increase" data-id="${product.id}">+</button>
                    <button class="btn btn-info btn-sm me-2" data-id="${product.id}">Chi tiết</button>
                    <button class="text-danger ms-auto" data-id="${product.id}">Xóa đơn hàng</button>
                </div>
            </div>
            <div class="text-end">
                <p class="fw-bold">${(product.gia * product.soLuong).toLocaleString()}đ</p>
            </div>
         `;
        productContainer.appendChild(productElement);
    });
     // Cập nhật tổng giá trị giỏ hàng
     const totalAmountElement = document.getElementById('total-amount');
     totalAmountElement.innerText = calculateTotalAmount().toLocaleString() + 'đ';
}
// Tính tổng giá trị giỏ hàng
function calculateTotalAmount() {
    let totalAmount = 0;
    productData.forEach(product => {
        totalAmount += product.gia * product.soLuong;
    });
    return totalAmount;
}

// Hiển thị chi tiết sản phẩm
function showProductDetails(productId) {
    const product = productData.find(p => parseInt(p.id) === parseInt(productId));

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

// Xóa sản phẩm
function deleteProduct(productId) {
    // Lọc bỏ sản phẩm khỏi dữ liệu
    productData = productData.filter(p => parseInt(p.id) !== parseInt(productId));

    // Cập nhật lại localStorage và làm mới giao diện
    localStorage.setItem('products', JSON.stringify(productData));
    displayProducts(); // Hiển thị lại danh sách sản phẩm
}

// Khởi động ứng dụng
document.addEventListener('DOMContentLoaded', init);