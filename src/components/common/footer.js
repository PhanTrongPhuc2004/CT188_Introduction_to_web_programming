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
                    <h5 class=>ĐỊA CHỈ</h5>
                    <div class="contact-info">
                        <div>
                            <img src="../../../Data/Icon/footer_icon/home.png" alt="" class="footer_icon">
                            <p class="d-inline text-wrap">Địa chỉ: 3/2 Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                        </div>

                        <div class="d-flex text-nowrap">
                            <img src="../../../Data/Icon/footer_icon/telephone.png" alt="" class="footer_icon">
                            <p>Điện thoại: 0911 522 929</p>
                        </div>

                        <div class="d-flex text-nowrap">
                            <img src="../../../Data/Icon/footer_icon/mail.png" alt="" class="footer_icon">
                            <p>Email: weddingplanning@gmail.com</p>
                        </div>

                    </div>
                </div>

                <!-- Services Section -->
                <div class="col-md-2 text-start">
                    <h5 class="text-nowrap">MẠNG XÃ HỘI</h5>

                    <ul class="list-unstyled">
                        <li><a href="#"><img class="mxh" src="../../../Data/Images/mangxahoi/facebook.png"
                                    width="50px" alt="facebook">Facebook</a></li>

                        <li><a href="#"><img class="mxh" src="../../../Data/Images/mangxahoi/instagram.png"
                                    width="50px" alt="facebook">Instagram</a></li>

                        <li><a href="#"><img class="mxh" src="../../../Data/Images/mangxahoi/zalo.png"
                                    width="50px" alt="facebook">Zalo</a></li>
                    </ul>


                </div>

                <!-- DICH VU -->
                <div class="col-md-3 text-start justify-content-center align-items-center ">
                    <div>
                        <h5>DỊCH VỤ</h5>
                        <ul class="list-unstyled">
                            <li>Trang điểm</li>
                            <li>Quay phim</li>
                            <li>Chụp ảnh </li>
                            <li>Phục vụ món ăn</li>
                        </ul>
                    </div>

                </div>


                <div class="col-md-3 text-start">
                    <h5>THÔNG TIN THÊM</h5>
                    <ul class="list-unstyled">
                        <li><a href="/src/components/pages/customer_service.html">Chăm sóc khách hàng</a></li>
                        <li><a href="/src/components/pages/preferential.html">Ưu đãi</a></li>
                        <li><a href="/src/components/pages/privacy policy.html">Thông tin chính sách và bảo mật</a></li>
                    </ul>
                </div>
            </div>
            <div class="coppyright">
                <p class="text-center fw-lighter">Copyright © Wedding Planning. All rights reserved</p>
            </div>
        </div>
</footer>
`;

// export default footerHTML;