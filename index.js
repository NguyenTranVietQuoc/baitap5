//Bài 1
document.querySelector('.tinhDiem').addEventListener('click', function () {
    let diemMon1 = parseFloat(document.getElementById('diemMon1').value);
    let diemMon2 = parseFloat(document.getElementById('diemMon2').value);
    let diemMon3 = parseFloat(document.getElementById('diemMon3').value);
    let diemChuan = parseFloat(document.getElementById('diemChuan').value);
    let khuVuc = document.getElementById('khuVuc').value;
    let doiTuong = document.getElementById('doiTuong').value;


    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById('result').innerText = 'Thí sinh rớt vì có môn bị điểm 0.';
        return;
    }

    // Tính điểm ưu tiên khu vực
    let diemUuTienKhuVuc = 0;
    switch (khuVuc) {
        case 'A':
            diemUuTienKhuVuc = 2;
            break;
        case 'B':
            diemUuTienKhuVuc = 1;
            break;
        case 'C':
            diemUuTienKhuVuc = 0.5;
            break;
        default:
            diemUuTienKhuVuc = 0;
            break;
    }

    // Tính điểm ưu tiên đối tượng
    let diemUuTienDoiTuong = 0;
    switch (doiTuong) {
        case '1':
            diemUuTienDoiTuong = 2.5;
            break;
        case '2':
            diemUuTienDoiTuong = 1.5;
            break;
        case '3':
            diemUuTienDoiTuong = 1;
            break;
        default:
            diemUuTienDoiTuong = 0;
            break;
    }


    let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;


    let rsE = document.getElementById('result');
    if (tongDiem >= diemChuan) {
        rsE.innerText = `Thí sinh đậu. Tổng điểm đạt được: ${tongDiem}`;
        rsE.classList.remove('bg-danger');
        rsE.classList.add('bg-success');
    } else {
        rsE.innerText = `Thí sinh rớt. Tổng điểm đạt được: ${tongDiem}`;
        rsE.classList.remove('bg-success');
        rsE.classList.add('bg-danger');
    }
});


//Bài 2
document.getElementById("tinhTienDien").onclick = function (){
    let ten = document.getElementById('ten').value;
    let soKw = parseFloat(document.getElementById('soKw').value);
    let tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById('result-1').innerText = `${ten}, số tiền điện phải trả là ${tienDien.toLocaleString()} đồng.`;
}

// Bài 3
document.getElementById("tinhThue").onclick = function (){
    let hoTen = document.getElementById('hoTen').value;
    let tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    let soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);
    

    let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
    
    let thuePhaiTra = 0;
    if (thuNhapChiuThue <= 0) {
        thuePhaiTra = 0;
    } else if (thuNhapChiuThue <= 60) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.10;
    } else if (thuNhapChiuThue <= 210) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.20;
    } else if (thuNhapChiuThue <= 624) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.30;
    } else {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (thuNhapChiuThue - 960) * 0.35;
    }

    document.getElementById('result-2').innerText = `${hoTen}, thuế thu nhập cá nhân phải trả là ${thuePhaiTra.toLocaleString()} triệu đồng.`;
}

// Bài 4
function calculateBill() {
    let customerId = document.getElementById("customerId").value;
    let customerType = document.getElementById("customerType").value;
    let connections = parseInt(document.getElementById("connections").value);
    let channels = parseInt(document.getElementById("channels").value);
    let totalBill = 0;

    if (customerType === "nhaDan") {
        totalBill = calculateHouseholdBill(channels);
    } else {
        totalBill = calculateBusinessBill(connections, channels);
    }

    displayResult(customerId, totalBill);
}

function calculateHouseholdBill(channels) {
    let processingFee = 4.5;
    let basicServiceFee = 20.5;
    let premiumChannelFee = 7.5 * channels;
    return processingFee + basicServiceFee + premiumChannelFee;
}

function calculateBusinessBill(connections, channels) {
    let processingFee = 15;
    let basicServiceFee = 75;
    let additionalConnectionFee = Math.max(0, connections - 10) * 5;
    let premiumChannelFee = 50 * channels;
    return processingFee + basicServiceFee + additionalConnectionFee + premiumChannelFee;
}

function displayResult(customerId, totalBill) {
    document.getElementById("result-3").innerHTML = "<strong>Mã khách hàng:</strong> " + customerId + "<br><strong>Tổng hóa đơn:</strong> " + totalBill.toFixed(2) + "$";
}

function toggleConnectionInput() {
    let customerType = document.getElementById("customerType").value;
    let connectionsInput = document.getElementById("connections");

    if (customerType === "doanhNghiep") {
        connectionsInput.disabled = false;
    } else {
        connectionsInput.disabled = true;
    }
}