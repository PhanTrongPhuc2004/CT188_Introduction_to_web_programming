// Hiển thị sản phẩm từ dữ liệu JSON dùng jQuery
$(document).ready(function () {
    // Lấy dữ liệu từ file JSON
    $.getJSON('../../../Data/Location.json', function (data) {
        // Chọn phần tử để hiển thị các card
        const $container = $('#product-container');

        // Duyệt qua từng sản phẩm và tạo thẻ card
        $.each(data, function (index, product) {
            const cardHtml = `
                <div class="col-md-4" data-product-id="${product.id}">  <div class="card">
                    <img src="../../../${product.anhBia}" class="card-img-top" alt="${product.ten}">
                    <div class="card-body">
                        <h5 class="card-title">${product.ten}</h5>
                        <p class="card-text">${product.moTa}</p>
                        <p class="card-text">Giá: ${product.gia} VNĐ</p>
                        <button class="btn btn-primary">Mua</button> </div>
                    </div>
                    </div>
                </div>
            `;
            $container.append(cardHtml);
        });
    });
});

// Bắt sự kiện click vào toàn bộ phần tử có class "col-md-4"
$$('.col-md-4').on('click', function() {
    const productId = $(this).data('product-id');
    // Lưu productId vào Local Storage
    localStorage.setItem('productId', productId);

    // Chuyển hướng đến trang chi tiết
    window.location.href = './detail.html';
});