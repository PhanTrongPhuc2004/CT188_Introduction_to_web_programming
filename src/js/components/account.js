//Xử lý cho các ô drop down ngày, tháng, năm
$(document).ready(function () {
  // Tạo các lựa chọn cho dropdown Ngày
  for (let day = 1; day <= 31; day++) {
    $("#birthDay").append(`<option value="${day}">${day}</option>`);
  }

  // Tạo các lựa chọn cho dropdown Tháng
  for (let month = 1; month <= 12; month++) {
    $("#birthMonth").append(`<option value="${month}">${month}</option>`);
  }

  // Tạo các lựa chọn cho dropdown Năm
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--) {
    $("#birthYear").append(`<option value="${year}">${year}</option>`);
  }
});

//Xử lý ô nhập email
$("#email").on("input", function () {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = $(this).val();

  if (!emailPattern.test(emailInput)) {
    $(this).addClass("is-invalid");
  } else {
    $(this).removeClass("is-invalid");
  }
});

// Xử lý ô số điện thoại
// Chặn ký tự không phải số
$("#phone").on("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// Kiểm tra và hiển thị lỗi cho ô nhập số điện thoại
$("#phone").on("input", function () {
  const phonePattern = /^0[3-9]\d{8}$/;
  const phoneNumber = this.value;

  // Kiểm tra định dạng số điện thoại
  if (!phone || !phonePattern.test(phone)) {
    $("#phone").addClass("is-invalid");
    $("#messageProfile").html(
      '<div class="alert alert-danger">Vui lòng nhập đúng định dạng số điện thoại (Hai số đầu bắt đầu từ 03-09 và có 10 chữ số)!</div>'
    );
    return;
  } else {
    $("#phone").removeClass("is-invalid");
  }
});

//Xử lý khi nhấn vào nút cập nhật thông tin
$(document).ready(function () {
  // Xử lý khi nhấn vào nút "Cập nhật thông tin"
  $("#updateAccountInfo").on("click", function () {
    // Lấy giá trị từ các ô input
    const userName = $("#userName").val().trim();
    const fullName = $("#fullName").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();

    // Regex kiểm tra định dạng email và số điện thoại
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^0[3-9]\d{8}$/;

    // Kiểm tra các trường bắt buộc không được bỏ trống
    if (!userName) {
      $("#userName").addClass("is-invalid");
      $("#messageProfile").html(
        '<div class="alert alert-danger">Vui lòng nhập Tên đăng nhập!</div>'
      );
      return;
    } else {
      $("#userName").removeClass("is-invalid");
    }

    if (!fullName) {
      $("#fullName").addClass("is-invalid");
      $("#messageProfile").html(
        '<div class="alert alert-danger">Vui lòng nhập Họ và tên!</div>'
      );
      return;
    } else {
      $("#fullName").removeClass("is-invalid");
    }

    // Kiểm tra định dạng email
    if (!email || !emailPattern.test(email)) {
      $("#email").addClass("is-invalid");
      $("#messageProfile").html(
        '<div class="alert alert-danger">Vui lòng nhập đúng định dạng Email (ví dụ: example@gmail.com)!</div>'
      );
      return;
    } else {
      $("#email").removeClass("is-invalid");
    }

    // Kiểm tra định dạng số điện thoại
    if (!phone || !phonePattern.test(phone)) {
      $("#phone").addClass("is-invalid");
      $("#messageProfile").html(
        '<div class="alert alert-danger">Vui lòng nhập đúng định dạng số điện thoại (Hai số đầu bắt đầu từ 03-09 và có 10 chữ số)!</div>'
      );
      return;
    } else {
      $("#phone").removeClass("is-invalid");
    }

    $("#messageProfile").html(
      '<div class="alert alert-success">Cập nhật thông tin tài khoản thành công!</div>'
    );
  });
});

//Xử lý khi nhấn vào icon con mắt
$(document).ready(function () {
  // Toggle mật khẩu hiện tại
  $("#togglePassword").on("click", function () {
    const passwordField = $("#password");
    const type =
      passwordField.attr("type") === "password" ? "text" : "password";
    passwordField.attr("type", type);
    $(this).toggleClass("bi-eye bi-eye-slash");
  });

  // Toggle mật khẩu mới
  $("#toggleNewPassword").on("click", function () {
    const newPasswordField = $("#newPassword");
    const icon = $(this);
    if (newPasswordField.attr("type") === "password") {
      newPasswordField.attr("type", "text");
      icon.removeClass("bi-eye-slash").addClass("bi-eye");
    } else {
      newPasswordField.attr("type", "password");
      icon.removeClass("bi-eye").addClass("bi-eye-slash");
    }
  });

  // Toggle xác nhận mật khẩu mới
  $("#toggleConfirmPassword").on("click", function () {
    const confirmPasswordField = $("#confirmPassword");
    const icon = $(this);
    if (confirmPasswordField.attr("type") === "password") {
      confirmPasswordField.attr("type", "text");
      icon.removeClass("bi-eye-slash").addClass("bi-eye");
    } else {
      confirmPasswordField.attr("type", "password");
      icon.removeClass("bi-eye").addClass("bi-eye-slash");
    }
  });
});

//Fetch API tỉnh thành Việt Nam
// API URLs
const API_PROVINCE = "https://provinces.open-api.vn/api/?depth=1";
const API_DISTRICT = (provinceCode) =>
  `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`;
const API_WARD = (districtCode) =>
  `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`;

// Elements
const provinceSelect = document.getElementById("province");
const districtSelect = document.getElementById("district");
const wardSelect = document.getElementById("ward");

// Fetch Provinces
async function fetchProvinces() {
  try {
    const response = await fetch(API_PROVINCE);
    const provinces = await response.json();

    provinces.forEach((province) => {
      const option = document.createElement("option");
      option.value = province.code;
      option.textContent = province.name;
      provinceSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
  }
}

// Fetch Districts
async function fetchDistricts(provinceCode) {
  districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
  wardSelect.innerHTML = '<option value="">Chọn Phường/Xã</option>';

  if (!provinceCode) return;

  try {
    const response = await fetch(API_DISTRICT(provinceCode));
    const { districts } = await response.json();

    districts.forEach((district) => {
      const option = document.createElement("option");
      option.value = district.code;
      option.textContent = district.name;
      districtSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách quận/huyện:", error);
  }
}

// Fetch Wards
async function fetchWards(districtCode) {
  wardSelect.innerHTML = '<option value="">Chọn Phường/Xã</option>';

  if (!districtCode) return;

  try {
    const response = await fetch(API_WARD(districtCode));
    const { wards } = await response.json();

    wards.forEach((ward) => {
      const option = document.createElement("option");
      option.value = ward.code;
      option.textContent = ward.name;
      wardSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phường/xã:", error);
  }
}

// Event Listeners
provinceSelect.addEventListener("change", (event) => {
  const provinceCode = event.target.value;
  fetchDistricts(provinceCode);
});

districtSelect.addEventListener("change", (event) => {
  const districtCode = event.target.value;
  fetchWards(districtCode);
});

// Fetch initial data
fetchProvinces();

// Xử lý cho các ô dropdown Tỉnh/Thành phố, Quận/Huyện, Phường/Xã
$(document).ready(function () {
  // Sự kiện khi người dùng thay đổi Tỉnh/Thành phố
  $("#province").on("change", function () {
    if ($(this).val() === "") {
      $(this).addClass("is-invalid");
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng chọn Tỉnh/Thành phố!</div>'
      );
    } else {
      $(this).removeClass("is-invalid");
    }
  });

  // Sự kiện khi người dùng thay đổi Quận/Huyện
  $("#district").on("change", function () {
    if ($(this).val() === "") {
      $(this).addClass("is-invalid");
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng chọn Quận/Huyện!</div>'
      );
    } else {
      $(this).removeClass("is-invalid");
    }
  });

  // Sự kiện khi người dùng thay đổi Phường/Xã
  $("#ward").on("change", function () {
    if ($(this).val() === "") {
      $(this).addClass("is-invalid");
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng chọn Phường/Xã!</div>'
      );
    } else {
      $(this).removeClass("is-invalid");
    }
  });
});

// Xử lý ô nhập Số nhà
$("#houseNumber").on("input", function () {
  // Biểu thức chính quy cho phép số nhà chữ cái, số, dấu cách và ký tự '/'
  const houseNumberPattern = /^[a-zA-Z0-9\s/]{1,10}$/;
  const houseNumber = $(this).val();

  if (!houseNumberPattern.test(houseNumber)) {
    $(this).addClass("is-invalid");
    $("#messageAddress").html(
      '<div class="alert alert-danger">Số nhà chỉ chứa chữ, số, dấu cách và ký tự "/" tối đa 10 ký tự!</div>'
    );
  } else {
    $(this).removeClass("is-invalid");
    $("#messageAddress").empty();
  }
});

// Xử lý ô nhập Tên đường
$("#streetName").on("input", function () {
  const streetNamePattern = /^[a-zA-Z0-9\s\/]+$/;
  const streetName = $(this).val();

  if (!streetNamePattern.test(streetName)) {
    $(this).addClass("is-invalid");
    $("#messageAddress").html(
      '<div class="alert alert-danger">Tên đường chỉ chứa chữ cái và khoảng trắng, không có ký tự đặc biệt!</div>'
    );
  } else {
    $(this).removeClass("is-invalid");
    $("#messageAddress").empty();
  }
});

// Xử lý khi nhấn nút "Cập nhật địa chỉ"
$(document).ready(function () {
  $("#updateAddressInfo").on("click", function () {
    const province = $("#province").val();
    const district = $("#district").val();
    const ward = $("#ward").val();

    const houseNumber = $("#houseNumber").val().trim();
    const houseNumberPattern = /^[a-zA-Z0-9\s/]{1,10}$/;

    const streetName = $("#streetName").val().trim();
    const streetNamePattern = /^[a-zA-Z0-9\s\/]+$/;

    // Kiểm tra các trường dropdown
    if (!province || !district || !ward) {
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng chọn đầy đủ Tỉnh/Thành phố, Quận/Huyện và Phường/Xã!</div>'
      );
      return;
    }

    // Kiểm tra trường số nhà
    if (!houseNumber || !houseNumberPattern.test(houseNumber)) {
      $("#houseNumber").addClass("is-invalid");
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng nhập số nhà!</div>'
      );
      return;
    } else {
      $("#houseNumber").removeClass("is-invalid");
    }
    // Kiểm tra trường tên đường
    if (!streetName || !streetNamePattern.test(streetName)) {
      $("#streetName").addClass("is-invalid");
      $("#messageAddress").html(
        '<div class="alert alert-danger">Vui lòng nhập tên đường!</div>'
      );
      return;
    } else {
      $("#streetName").removeClass("is-invalid");
    }

    // Nếu tất cả đều hợp lệ
    $("#messageAddress").html(
      '<div class="alert alert-success">Cập nhật địa chỉ thành công!</div>'
    );
  });
});

// Xử lý sidebar
$("#sidebar .nav-link").on("click", function () {
  $("#sidebar .nav-link").removeClass("active");
  $(this).addClass("active");
  $(".content-section").removeClass("active").addClass("d-none");
  const targetId = $(this).attr("href");
  $(targetId).removeClass("d-none").addClass("active");
});

// Xử lý khi submit form đổi mật khẩu
$("#changePasswordForm").on("submit", function (e) {
  e.preventDefault();
  let currentPassword = $("#password").val();
  let newPassword = $("#newPassword").val();
  let confirmPassword = $("#confirmPassword").val();

  // Kiểm tra mật khẩu cũ và mật khẩu mới
  if (newPassword === currentPassword) {
    $("#messagePassword").html(
      '<div class="alert alert-danger">Mật khẩu mới không thể trùng với mật khẩu cũ!</div>'
    );
    return;
  }

  // Kiểm tra nếu các trường mật khẩu trống
  if (!currentPassword || !newPassword || !confirmPassword) {
    $("#messagePassword").html(
      '<div class="alert alert-danger">Tất cả các trường mật khẩu đều là bắt buộc!</div>'
    );
    return;
  }

  // Kiểm tra mật khẩu mới và xác nhận mật khẩu
  if (newPassword !== confirmPassword) {
    $("#messagePassword").html(
      '<div class="alert alert-danger">Mật khẩu mới và xác nhận không khớp!</div>'
    );
  } else {
    // Gửi thông tin cập nhật lên server hoặc xử lý ở đây
    $("#messagePassword").html(
      '<div class="alert alert-success">Cập nhật thông tin thành công!</div>'
    );
  }
});
