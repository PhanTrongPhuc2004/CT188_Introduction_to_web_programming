// File header.js là chuyển đổi từ file header.html thành 1 biến js để chèn vào các trang khác (chỉ cần copy bên header.html rồi dán qua đây thôi)
const headerHTML = `
  <header style="background-color: rgba(0, 0, 0, 0.05);">
  <head>
    <base href="/">
  </head>
  <body>
    <h1>THUÊ NƠI TỔ CHỨC TIỆC CƯỚI</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/components/pages/shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/components/pages/detail.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/src/components/pages/contact.html">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/src/components/pages/login.html">Log in</a></li>
                  <li><a class="dropdown-item" href="#">Log out</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="/src/components/pages/account.html">Manage</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <hr>
  </body>
</header>
`;