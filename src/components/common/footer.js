// File footer.js là chuyển đổi từ file footer.html thành 1 biến js để chèn vào các trang khác (chỉ cần copy bên footer.html rồi dán qua đây thôi)
const footerHTML = `
 <footer class="footer mt-5">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeddingPlanning</title>
    <link rel="stylesheet" href="../../../bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <script src="../../../jquery-3.7.1/jquery-3.7.1.min.js"></script>
    <script src="../../../bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
    <!-- <link rel="stylesheet" href="../../css/styles.css"> -->
    <link rel="stylesheet" href="./src/css/components/footer.css">
    <base href="/">
  </head>
  <body>

    <div class="container">
      <div class="row">
          <!-- Company Info Section -->
          <div class="col-md-4 text-start">
              <h5 class="footer-brand">Wedding Planning</h5>
              <div class="contact-info">
                  <p>Địa chỉ: 3/2 Xuân Khánh, Ninh Kiều, TP. Cần Thơ</p>
                  <p>Điện thoại: 0911 522 929 (C. Bình)</p>
                  <p>Email: abc@gmail.com</p>
                  <p>Website: <a href="http://fb.com/Weddingplanning">fb.com/Weddingplanning</a></p>
                  <p>Zalo: 0911 522 929</p>
                  <p>Facebook: <a href="http://fb.com/Weddingplanning">fb.com/Weddingplanning</a></p>
              </div>
          </div>

          <!-- Services Section -->
          <div class="col-md-4 text-start">
              <h5 >Dịch vụ</h5>
              <ul class="list-unstyled">
                  <li><a href="#">Lễ Vật Dạm Ngõ</a></li>
                  <li><a href="#">Trang Trí Gia Tiên</a></li>
                  <li><a href="#">Xe Hoa - Hoa Trang Trí</a></li>
                  <li><a href="#">Khung Rạp Cưới Hỏi</a></li>
              </ul>
          </div>

          <!-- Policy Section -->
          <div class="col-md-4 text-start">
              <h5>Chính sách</h5>
              <ul class="list-unstyled">
                  <li><a href="#">Chính Sách Đổi Trả & Hoàn Tiền</a></li>
              </ul>
          </div>
      </div>
  </div>
</footer>
`;

// export default footerHTML;