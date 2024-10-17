// ĐÂY LÀ FILE JS CHUNG CHO CÁC TRANG CÒN LẠI

//Lấy dữ liệu từ file header.html rồi đưa vào thẻ có id="header"
fetch('../common/header.html')
.then(response => response.text())
.then(data => {
    const headerElement = document.getElementById('header');
    headerElement.innerHTML = data;  
});

//Lấy dữ liệu từ file footer.html rồi đưa vào thẻ có id="footer"
fetch('../common/footer.html')
.then(response => response.text())
.then(data => {
    const footerElement = document.getElementById('footer');
    footerElement.innerHTML = data;  
});