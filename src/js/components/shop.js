// Lấy dữ liệu sp từ biến products trong local storage ra để hiển thị
const container = document.getElementById('product-container');
let Products = JSON.parse(localStorage.getItem("products"));

Products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('col-md-4');

  const cardContent = `
      <div class="card" data-product-id="${product.id}" style="margin-bottom: 15px;margin-top: 5px; border-radius: 8px;">
        <img src="${product.anhBia}" class="card-img-top" alt="${product.ten}">
        <div class="card-body">
          <h5 class="card-title">${product.ten}</h5>
          <p class="card-text">${product.moTa}</p>
          <p class="card-text">Giá thuê: <b>${product.gia.toLocaleString()}</b> đ/bàn</p>
          <button class="btn btn-primary" style="color: #eeeae6; background-color: #d64d68; border: 0px;">Xem Chi Tiết</button>
        </div>
      </div>
    `;
  // console.log(product.id);
  card.innerHTML = cardContent;
  container.appendChild(card);
});

// Lấy tất cả các phần tử có class "col-md-4"
const elements = document.querySelectorAll('.card');

// Thêm sự kiện click vào từng phần tử sp
elements.forEach(element => {
  element.addEventListener('click', () => {
    // Lấy productId từ thuộc tính data
    const productId = element.dataset.productId;
    console.log(productId);
    const productList = JSON.parse(localStorage.getItem("products"));
    // alert(productList); 
    productList.forEach(product => {
      // Lưu product đã chọn vào Local Storage
       if(product.id == productId) {
          localStorage.setItem('productSelected', JSON.stringify(product));
       }
     });

    // Chuyển hướng đến trang chi tiết
    window.location.href = '/src/components/pages/detail.html';
  });
});