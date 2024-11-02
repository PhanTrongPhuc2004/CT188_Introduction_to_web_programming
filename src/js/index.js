// ĐÂY LÀ FILE JS CHO TRANG CHỦ

// Chèn phần header từ header.js vào trang chủ
const headerElement = document.getElementById('header');
headerElement.innerHTML = headerHTML;

// Chèn phần footer từ footer.js vào trang chủ
const footerElement = document.getElementById('footer');
footerElement.innerHTML = footerHTML;

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