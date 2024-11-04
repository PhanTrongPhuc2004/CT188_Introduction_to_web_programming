// Lấy dữ liệu từ file products.js vào
const container = document.getElementById('product-container');
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');

    const cardContent = `
      <div class="card">
        <img src="./${product.anhBia}" class="card-img-top" alt="${product.ten}">
        <div class="card-body">
          <h5 class="card-title">${product.ten}</h5>
          <p class="card-text">${product.moTa}</p>
          <p class="card-text">Giá: ${product.gia} VNĐ</p>
          <button class="btn btn-primary">Xem chi tiết</button>
        </div>
      </div>
    `;

    card.innerHTML = cardContent;
    container.appendChild(card);
});

// // Bắt sự kiện click vào toàn bộ phần tử có class "col-md-4"
// $$('.col-md-4').on('click', function() {
//     const productId = $(this).data('product-id');
//     // Lưu productId vào Local Storage
//     localStorage.setItem('productId', productId);

//     // Chuyển hướng đến trang chi tiết
//     window.location.href = './detail.html';
// });