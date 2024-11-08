// File header.js là chuyển đổi từ file header.html thành 1 biến js để chèn vào các trang khác (chỉ cần copy bên header.html rồi dán qua đây thôi)
const headerHTML = `
<header > 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeddingPlanning</title>
    <link rel="stylesheet" href="/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <script src="/jquery-3.7.1/jquery-3.7.1.min.js"></script>
    <script src="/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/src/css/styles.css">
    <link rel="stylesheet" href="/src/css/components/header.css">
    <base href="/">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/src/components/pages/infor.html">
          <img src="/Data/Logo/logo1.jpg" class="img-fluid" alt="logo" width="100px">
          <div class="d-flex flex-column">
              <a class="navbar-brand" href="/src/components/pages/infor.html">
                  WeddingPlanning 
                </a>
                <span class="hotline text-start">Hotline: 0911 522 929</span>
        </a>
          </div>
          
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/index.html">TRANG CHỦ</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MENU
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/src/components/pages/shop.html">DỊCH VỤ</a></li>
                <li><a class="dropdown-item" href="/src/components/pages/cart.html">GIỎ HÀNG</a></li>
                <li><a class="dropdown-item" href="/src/components/pages/order.html">ĐƠN HÀNG</a></li>
                <li><a class="dropdown-item" href="/src/components/pages/login.html">ĐĂNG NHẬP</a></li>
                <li><a class="dropdown-item" href="#">ĐĂNG XUẤT</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/components/pages/contact.html">LIÊN HỆ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/components/pages/account.html">TÀI KHOẢN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </body>
</header>
`;
