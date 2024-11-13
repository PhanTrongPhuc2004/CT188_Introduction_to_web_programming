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
        <link rel="stylesheet" href="../../css/components/footer.css">
        <base href="/">
    </head>

    <body>

        <div class="container footer">
            <div class="row">
                <!-- Company Info Section -->
                <div class="col-md-4 text-start">
                    <h5 class=>ĐỊA CHỈ</h5>
                    <div class="contact-info text-nowrap">
                        <div class="d-flex"><img src="../../../Data/Images/footer_icon/home.png" alt=""
                                class="footer_icon img-fluid">
                            <p>Địa chỉ: 3/2 Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                        </div>

                        <div class="d-flex"><img src="../../../Data/Images/footer_icon/telephone.png" alt=""
                                class="footer_icon">
                            <p>Điện thoại: 0911 522 929</p>
                        </div>

                        <div class="d-flex text-nowrap"><img src="../../../Data/Images/footer_icon/mail.png" alt=""
                                class="footer_icon">
                            <p>Email: weddingplanning@gmail.com</p>
                        </div>

                    </div>
                </div>

                <!-- Services Section -->
                <div class="col-md-2 text-start">
                    <h5>MẠNG XÃ HỘI</h5>

                    <ul class="list-unstyled">
                        <li><a href="facebook.com"><img class="mxh" src="../../../Data/Images/mangxahoi/facebook.png"
                                    alt="facebook">Facebook</a></li>

                        <li><a href="facebook.com"><img class="mxh" src="../../../Data/Images/mangxahoi/instagram.png"
                                    alt="facebook"> Instagam</a></li>

                        <li><a href="facebook.com"><img class="mxh" src="../../../Data/Images/mangxahoi/zalo.png"
                                    alt="facebook">Zalo</a></li>

                    </ul>
                </div>

                <!-- DICH VU -->
                <div class="col-md-3 d-flex  align-items-center text-start flex-column">
                    <div>
                        <h5 class="text-start">DỊCH VỤ</h5>
                        <ul class="list-unstyled ">
                            <li><a href="#">Quay phim</a></li>
                            <li><a href="#">Trang điểm</a></li>
                            <li><a href="#">Chụp ảnh </a></li>
                            <li><a href="#">Phụ vụ món ăn</a></li>
                        </ul>
                    </div>

                </div>

                <div class="col-md-3 text-start">
                    <h5>THÔNG TIN THÊM</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Chăm sóc khách hàng</a></li>
                        <li><a href="#">Ưu đãi</a></li>
                        <li><a href="#">Thông tin chính sách</a></li>

                    </ul>
                </div>
            </div>
            <div class="coppyright mt-3">
                <p class="text-center fw-lighter">Copyright © Wedding Planning. All rights reserved</p>
            </div>
        </div>
</footer>
`;

// export default footerHTML;