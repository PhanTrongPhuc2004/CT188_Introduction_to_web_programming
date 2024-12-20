// File header.js là chuyển đổi từ file header.html thành 1 biến js để chèn vào các trang khác (chỉ cần copy bên header.html rồi dán qua đây thôi)
const headerHTML = `
<header id="Header">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WeddingPlanning</title>
        <link rel="stylesheet" href="/bootstrap-5.0.2-dist/css/bootstrap.min.css">
        <script src="/jquery-3.7.1/jquery-3.7.1.min.js"></script>
        <script src="/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="/src/css/styles.css">
        <link rel="stylesheet" href="/src/css/components/header.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <base href="/">
        <style>
            #avatar {
                cursor: pointer;
                object-fit: cover;
                border: 2px solid #ddd;
            }

            #avatar:hover {
                border-color: #007bff;
            }
        </style>
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
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
                        <a class="nav-link" aria-current="page" href="/index.html">TRANG CHỦ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/src/components/pages/shop.html">DỊCH VỤ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/src/components/pages/contact.html">LIÊN HỆ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="avatarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img id="avatar" src="" class="rounded-circle" alt="Avatar" width="40px" height="40px">
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/src/components/pages/account.html">TÀI KHOẢN</a></li>
                            <li><a class="dropdown-item" href="/src/components/pages/login.html">ĐĂNG NHẬP</a></li>
                            <li><a id="logout_button" class="dropdown-item" type="button" href="/index.html">ĐĂNG
                                    XUẤT</a></li>
                        </ul>
                    </li>
                    <li id="icon_cart_order" class="set-icon">
                        <button class="btn-giohang">
                            <a href="/src/components/pages/cart.html"><i class="bi bi-cart"></i></a>
                        </button>
                        <span class="divider"></span>
                        <!-- Icon đơn hàng -->
                        <button class="btn-donhang">
                            <a href="/src/components/pages/order.html"><i class="bi bi-receipt"></i></a>
                        </button>
                    </li>
                    <li id="admin_button" class="set-icon">
                        <button class="btn-admin">
                            <a href="/src/components/pages/admin.html"><i class="bi bi-tools"></i></a>
                        </button>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        <script>
            document.addEventListener("DOMContentLoaded", () => {
                const avatar = document.getElementById('avatar');
                const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

                if (loggedUser?.status && loggedUser.user?.anhDaiDien) {
                    avatar.src = loggedUser.user.anhDaiDien;
                } else {
                    avatar.src = "/Data/Images/Avatar/Avatar/Account.png"; // Avatar mặc định
                }
            });
        </script>
        <div style="width: 100%; height: 130px; "></div>
    </body>
</header>
`;
