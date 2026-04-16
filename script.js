// ==================== DATA LENGKAP ANGGOTA IRMANUFA ====================
// Berdasarkan file dokumen Data Anggota IRMANUFA Kabinet GG IRMANUFA 27-29
// Total 88 anggota (termasuk BPH)
// Username: irmanufa26 | Password: mahes

const members = {
  // ========== BADAN PENGAWAS HARIAN (BPH) - KODE 01 ==========

  "26.01.002": {
    nama: "Nalendra Maheswara",
    gender: "L",
    jabatan: "Wakil Ketua Umum/Plt Ketua Umum",
  },
  "26.01.003": {
    nama: "Tasya Amelia Putri",
    gender: "P",
    jabatan: "Sekretaris I",
  },
  "26.01.004": {
    nama: "Lidya Febrianti",
    gender: "P",
    jabatan: "Sekretaris II",
  },
  "26.01.005": {
    nama: "Nursiva Salsabila",
    gender: "P",
    jabatan: "Bendahara I",
  },
  "26.01.006": { nama: "Fahri Maulana", gender: "L", jabatan: "Bendahara II" },

  // ========== DIVISI KEAGAMAAN DAN KEMASJIDAN (KODE 02) - 8 Orang ==========
  "26.02.001": {
    nama: "Moldi Trio Ringgo Hervavi",
    gender: "L",
    jabatan: "Ketua Divisi Keagmasjid",
  },
  "26.02.002": {
    nama: "Tsany Lukmanul Hakim",
    gender: "L",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.003": {
    nama: "Ilyas Sahbi",
    gender: "L",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.004": {
    nama: "Galank",
    gender: "L",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.005": {
    nama: "Putri Dwi Rahayu",
    gender: "P",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.006": {
    nama: "Iim Indiyani",
    gender: "P",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.007": {
    nama: "Sarah",
    gender: "P",
    jabatan: "Anggota Divisi Keagmasjid",
  },
  "26.02.008": {
    nama: "Muhamad Abdul Fatah Cahya Putrawan",
    gender: "L",
    jabatan: "Anggota Divisi Keagmasjid",
  },

  // ========== DIVISI HUBUNGAN MASYARAKAT (KODE 03) - 9 Orang ==========
  "26.03.001": {
    nama: "Muhammad Fahri",
    gender: "L",
    jabatan: "Ketua Divisi Humas / Plt. Ketua Umum",
  },
  "26.03.002": {
    nama: "Yoga Ady Lesmana",
    gender: "L",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.003": {
    nama: "M Yasin",
    gender: "L",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.004": {
    nama: "Abdullah Fardani",
    gender: "L",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.005": {
    nama: "Bhita Andini",
    gender: "P",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.006": {
    nama: "Aliend Nur Zahra",
    gender: "P",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.007": {
    nama: "Wiji Astuti",
    gender: "P",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.008": {
    nama: "Rizkia Meliani Safitri",
    gender: "P",
    jabatan: "Anggota Divisi Humas",
  },
  "26.03.009": {
    nama: "Faiz Rahardika Chandra",
    gender: "L",
    jabatan: "Anggota Divisi Humas",
  },

  // ========== DIVISI PERINGATAN HARI BESAR ISLAM (KODE 04) - 7 Orang ==========
  "26.04.001": {
    nama: "Akhmad Fauzi Hanafi",
    gender: "L",
    jabatan: "Ketua Divisi PHBI",
  },
  "26.04.002": {
    nama: "Rizky Pratama",
    gender: "L",
    jabatan: "Anggota Divisi PHBI",
  },
  "26.04.003": {
    nama: "Baats Jauhari",
    gender: "L",
    jabatan: "Anggota Divisi PHBI",
  },
  "26.04.004": {
    nama: "Reza Firman Maulana",
    gender: "L",
    jabatan: "Anggota Divisi PHBI",
  },
  "26.04.005": {
    nama: "Wafiq Azizah",
    gender: "P",
    jabatan: "Anggota Divisi PHBI",
  },
  "26.04.006": {
    nama: "Siska Komalasari",
    gender: "P",
    jabatan: "Anggota Divisi PHBI",
  },
  "26.04.007": {
    nama: "Arya Agung Fadilah",
    gender: "L",
    jabatan: "Anggota Divisi PHBI",
  },

  // ========== DIVISI PENGEMBANGAN SUMBER DAYA MANUSIA (KODE 05) - 8 Orang ==========
  "26.05.001": {
    nama: "Dwi Fathi Malika Lubna",
    gender: "P",
    jabatan: "Ketua Divisi PSDM",
  },
  "26.05.002": {
    nama: "Zahwa Andiyah Putri",
    gender: "P",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.003": {
    nama: "Anisa Ramadhani",
    gender: "P",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.004": {
    nama: "Aisyah Fitriani",
    gender: "P",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.005": {
    nama: "Danis Fahrudin",
    gender: "L",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.006": {
    nama: "Habib Maulana Azizi",
    gender: "L",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.007": {
    nama: "Faturrochman",
    gender: "L",
    jabatan: "Anggota Divisi PSDM",
  },
  "26.05.008": {
    nama: "Agung Saputra",
    gender: "L",
    jabatan: "Anggota Divisi PSDM",
  },

  // ========== DIVISI KESEKRETARIATAN (KODE 06) - 8 Orang ==========
  "26.06.001": {
    nama: "Chindy Kharisya Putri",
    gender: "P",
    jabatan: "Ketua Divisi Kesekretariatan",
  },
  "26.06.002": {
    nama: "Siti Aisyah",
    gender: "P",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.003": {
    nama: "Ranti Puspita Sari",
    gender: "P",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.004": {
    nama: "Kareena",
    gender: "P",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.005": {
    nama: "Faqih Guntur Samudra",
    gender: "L",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.006": {
    nama: "Rayhan Satriawan",
    gender: "L",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.007": {
    nama: "Ikhwan Nurfadilah",
    gender: "L",
    jabatan: "Anggota Divisi Kesekretariatan",
  },
  "26.06.008": {
    nama: "Aditya Saputra",
    gender: "L",
    jabatan: "Anggota Divisi Kesekretariatan",
  },

  // ========== DIVISI PUBLIKASI DEKORASI DAN DOKUMENTASI (KODE 07) - 8 Orang ==========
  "26.07.001": {
    nama: "Daffina Hardiyanti Putri",
    gender: "P",
    jabatan: "Ketua Divisi PDD",
  },
  "26.07.002": {
    nama: "Caskia Dwi Pratiwi",
    gender: "P",
    jabatan: "Anggota Divisi PDD",
  },
  "26.07.003": { nama: "Hafizzah", gender: "P", jabatan: "Anggota Divisi PDD" },
  "26.07.004": {
    nama: "Laila Mukarromah",
    gender: "P",
    jabatan: "Anggota Divisi PDD",
  },
  "26.07.005": {
    nama: "Hikaru Rian Putra",
    gender: "L",
    jabatan: "Anggota Divisi PDD",
  },
  "26.07.006": {
    nama: "Rizky Akbar",
    gender: "L",
    jabatan: "Anggota Divisi PDD",
  },
  "26.07.007": {
    nama: "Fazril Januar",
    gender: "L",
    jabatan: "Anggota Divisi PDD",
  },
  "26.07.008": {
    nama: "Rizky Arya Widani",
    gender: "L",
    jabatan: "Anggota Divisi PDD",
  },

  // ========== ANGGOTA PASIF (KODE 08) - 34 Orang ==========
  "26.08.001": { nama: "Dedi Juwanto", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.002": {
    nama: "Salwa Revtiani",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.003": { nama: "Tuti Apriyani", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.004": { nama: "Indana Zulfa", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.005": {
    nama: "Sariati Nurfadilah",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.006": { nama: "Rafa Reita", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.007": {
    nama: "Maryatul Qibtiyah",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.008": {
    nama: "Rayhan Nadi Agung Wijaya",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.009": {
    nama: "Dinar Hamzah Azzayat",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.010": { nama: "Sarinih", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.011": { nama: "Linda Permata", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.012": {
    nama: "Fathan Abid Hafizh",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.013": {
    nama: "Muhammad Rizky",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.014": { nama: "Mawar", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.015": {
    nama: "Nazwa Aulia Rahmania Ruhli Syahputri",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.016": { nama: "Izza Jazirah", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.017": {
    nama: "Gally Cahya Putrawan",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.018": { nama: "M Soni Arsadi", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.019": {
    nama: "Devita Agustin",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.020": { nama: "M Syuja Aqil", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.021": { nama: "Putri Nabila", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.022": { nama: "Farid Alita", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.023": {
    nama: "Gadis Apriyani",
    gender: "P",
    jabatan: "Anggota Pasif",
  },
  "26.08.024": { nama: "Putri Nirmala", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.025": {
    nama: "M Arif Hidayat",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.026": {
    nama: "Yovanda Alfa Reza",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.027": { nama: "Siti Hajizah", gender: "P", jabatan: "Anggota Pasif" },
  "26.08.028": {
    nama: "Abdurachman Iskandar",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.029": {
    nama: "Angga Brhamntyo",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.030": { nama: "Rifqi Maulana", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.031": {
    nama: "Rizky Hardiansyah",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.032": { nama: "Adi Wibowo", gender: "L", jabatan: "Anggota Pasif" },
  "26.08.033": {
    nama: "Rafiq Wahid Alifudin",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
  "26.08.034": {
    nama: "Sukran Alramadhana",
    gender: "L",
    jabatan: "Anggota Pasif",
  },
};

// Total anggota: 6 (BPH) + 8 + 9 + 7 + 8 + 8 + 8 + 34 = 88
const totalMember = Object.keys(members).length;
document.getElementById("totalCount").innerText = totalMember;

// ==================== LOGIN (Password: mahes) ====================
document.getElementById("loginBtn").addEventListener("click", function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorDiv = document.getElementById("loginError");

  if (user === "irmanufa26" && pass === "mahes") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboardScreen").style.display = "block";
    errorDiv.innerText = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    errorDiv.innerText = "❌ Username atau password salah!";
  }
});

// ==================== LOGOUT ====================
document.getElementById("logoutBtn").addEventListener("click", function () {
  document.getElementById("dashboardScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
  closeSidebar();
  document.getElementById("memberCode").value = "";
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("errorMsg").style.display = "none";
});

// ==================== SIDEBAR ====================
const sidebar = document.getElementById("sidebarPanel");
const overlay = document.getElementById("overlay");

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("menuToggleBtn").addEventListener("click", openSidebar);
document
  .getElementById("closeSidebarBtn")
  .addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// ==================== NAVIGASI MENU ====================
const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page-content");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    const page = this.getAttribute("data-page");

    menuItems.forEach((m) => m.classList.remove("active"));
    this.classList.add("active");

    pages.forEach((p) => p.classList.remove("active"));
    if (page === "search") {
      document.getElementById("searchPage").classList.add("active");
    } else if (page === "about") {
      document.getElementById("aboutPage").classList.add("active");
    }

    closeSidebar();
  });
});

// ==================== PENCARIAN ANGGOTA ====================
function searchMember() {
  const code = document.getElementById("memberCode").value.trim().toUpperCase();
  const resultBox = document.getElementById("resultBox");
  const errorMsg = document.getElementById("errorMsg");
  const resultDetail = document.getElementById("resultDetail");

  // Reset
  resultBox.style.display = "none";
  errorMsg.style.display = "none";

  if (code === "") {
    errorMsg.innerText = "⚠️ Masukkan kode member terlebih dahulu!";
    errorMsg.style.display = "block";
    return;
  }

  // Validasi format
  const regex = /^\d{2}\.\d{2}\.\d{3}$/;
  if (!regex.test(code)) {
    errorMsg.innerText =
      "❌ Format salah! Gunakan format: 26.XX.YYY (contoh: 26.01.001)";
    errorMsg.style.display = "block";
    return;
  }

  const member = members[code];

  if (member) {
    const genderText = member.gender === "L" ? "Laki-laki 👨" : "Perempuan 👩";
    resultDetail.innerHTML = `
            <div class="member-name">${member.nama}</div>
            <div class="detail-row">
                <span class="detail-label">📋 Kode Member:</span>
                <span class="detail-value">${code}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">🚻 Jenis Kelamin:</span>
                <span class="detail-value">${genderText}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">📌 Jabatan:</span>
                <span class="detail-value">${member.jabatan}</span>
            </div>
        `;
    resultBox.style.display = "block";
  } else {
    errorMsg.innerText = `🔍 Kode member "${code}" tidak ditemukan!`;
    errorMsg.style.display = "block";
  }
}

document
  .getElementById("searchMemberBtn")
  .addEventListener("click", searchMember);
document
  .getElementById("memberCode")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") searchMember();
  });
