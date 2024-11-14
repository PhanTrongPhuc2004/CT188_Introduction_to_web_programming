// File header.js là chuyển đổi từ file header.html thành 1 biến js để chèn vào các trang khác (chỉ cần copy bên header.html rồi dán qua đây thôi)
const header_companyHTML = `
<header>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeddingPlanning</title>
    <link rel="stylesheet" href="/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <script src="/jquery-3.7.1/jquery-3.7.1.min.js"></script>
    <script src="/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/src/css/styles.css">
    <link rel="stylesheet" href="../../css/components/header.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <!-- <base href="/"> -->
  </head>

  <body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #f8f5f1;">
      <div class="container">
        <a class="navbar-brand" href="/src/components/pages/infor.html">
          <img src="/Data/Logo/logo1.jpg" class="img-fluid" alt="logo" width="100px">
          <div class="d-flex flex-column">
            <a class=" fw-bold weddingplanning" href="/src/components/pages/infor.html">
              Wedding Planning
            </a>
            <span class="hotline text-start">Hotline: 0911 522 929</span>
        </a>
      </div>

      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link"  href="../pages/admin.html">TRANG QUẢN TRỊ</a>
          </li>
          
          <li class="nav-item">
              <a class="nav-link" href="../pages/orderManagement.html">QUẢN LÝ ĐƠN HÀNG</a>
            </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../pages/productManagement.html">QUẢN LÝ SẢN PHẨM</a>
          </li>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              MENU
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="nav-item">
                <li class="nav-item">
                  <a class="nav-link" href="../pages/userManagement.html">QUẢN LÝ NGƯỜI DÙNG</a>
                </li>
              </li>
                <li class="nav-item">
                  <a class="nav-link" href="../pages/account.html">TÀI KHOẢN</a>
                </li>
            </ul>
          </li>
          
        </ul>

      </div>
      </div>
    </nav>
  </body>
</header>
`;
