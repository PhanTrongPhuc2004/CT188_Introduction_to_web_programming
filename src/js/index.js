// ĐÂY LÀ FILE JS CHO TRANG CHỦ

//Lấy dữ liệu từ file header.html rồi đưa vào thẻ có id="header"
fetch('/src/components/common/header.html')
    .then(response => response.text())
    .then(data => {
        // Tạo một phần tử div tạm thời để chèn nội dung
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        // Tìm và thay thế thẻ base nếu có
        const baseElement = tempDiv.querySelector('base');
        if (baseElement) {
            // Điều chỉnh href của thẻ base nếu cần
            baseElement.href = '/'; // Ví dụ: đặt đường dẫn cơ sở là gốc
        }
        const headerElement = document.getElementById('header');
        headerElement.innerHTML = tempDiv.innerHTML;
    });

//Lấy dữ liệu từ file footer.html rồi đưa vào thẻ có id="footer"
fetch('/src/components/common/footer.html')
    .then(response => response.text())
    .then(data => {
        const footerElement = document.getElementById('footer');
        footerElement.innerHTML = data;
    });

// Hiển thị sản phẩm từ dữ liệu JSON dùng jQuery
$(document).ready(function () {
    // Lấy dữ liệu từ file JSON
    $.getJSON('/Data/Location.json', function (data) {
        // Chọn phần tử để hiển thị các card
        const $container = $('#product-container');

        // Duyệt qua từng sản phẩm và tạo thẻ card
        $.each(data, function (index, product) {
            const cardHtml = `
                <div class="col-md-4">  <div class="card">
                    <img src="${product.anhBia}" class="card-img-top" alt="${product.ten}">
                    <div class="card-body">
                        <h5 class="card-title">${product.ten}</h5>
                        <p class="card-text">${product.moTa}</p>
                        <p class="card-text">Giá: ${product.gia} VNĐ</p>
                    </div>
                    </div>
                </div>
            `;
            $container.append(cardHtml);
        });
    });
});