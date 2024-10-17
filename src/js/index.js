// ĐÂY LÀ FILE JS CHO TRANG CHỦ

//Lấy dữ liệu từ file header.html rồi đưa vào thẻ có id="header"
fetch('/src/components/common/header.html')
.then(response => response.text())
.then(data => {
    const headerElement = document.getElementById('header');
    headerElement.innerHTML = data;  
});

//Lấy dữ liệu từ file footer.html rồi đưa vào thẻ có id="footer"
fetch('/src/components/common/footer.html')
.then(response => response.text())
.then(data => {
    const footerElement = document.getElementById('footer');
    footerElement.innerHTML = data;  
});