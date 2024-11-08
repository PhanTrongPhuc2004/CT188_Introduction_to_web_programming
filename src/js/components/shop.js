// Lấy dữ liệu từ file products.js vào
const container = document.getElementById('product-container');
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('col-md-4');

  const cardContent = `
      <div class="card" data-product-id="${product.id}">
        <img src="./${product.anhBia}" class="card-img-top" alt="${product.ten}">
        <div class="card-body">
          <h5 class="card-title">${product.ten}</h5>
          <p class="card-text">${product.moTa}</p>
          <p class="card-text">Giá: ${product.gia} VNĐ</p>
          <button class="btn btn-primary">Xem chi tiết</button>
        </div>
      </div>
    `;
  console.log(product.id);
  card.innerHTML = cardContent;
  container.appendChild(card);
});

// Lấy tất cả các phần tử có class "col-md-4"
const elements = document.querySelectorAll('.card');

// Thêm sự kiện click vào từng phần tử
elements.forEach(element => {
  element.addEventListener('click', () => {
    // Lấy productId từ thuộc tính data
    const productId = element.dataset.productId;
    console.log(productId);

    // Lưu productId vào Local Storage
    localStorage.setItem('productId', productId);

    // Chuyển hướng đến trang chi tiết
    window.location.href = '/src/components/pages/detail.html';
  });
});