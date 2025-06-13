document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            id: 1,
            name: "Point of Sale foodscan - by qrcode dimeja",
            description: "memudahkan anda dalam melayani pelanggan dengan qrcode. silahkan scan gambar ini",
            category: "dinamis",
            image: "images/foodscan1.png",
            demoLink: "https://demo.foodscan.xyz/login",
            cartLink: "https://demo.foodscan.xyz/login",
            details: "Fitur dasar meliputi: Pencatatan penjualan, Laporan harian/bulanan, Manajemen stok sederhana, Interface yang user-friendly, Support untuk printer thermal."
        },
        {
            id: 2,
            name: "Pos & eccomerce - Small Business",
            description: "Solusi Eccomerce dan Point Of Sales.",
            category: "dinamis",
            image: "images/foodapiecom.png",
            demoLink: "https://demo.foodappi.xyz/admin/pos",
            cartLink: "#",
            details: "Modul yang tersedia:\nKeuangan (arus kas/cash flow)\nInventaris (manajemen stok, purchase order)\nDashboard analitik (pelaporan dan visualisasi data)"
        },
        {
            id: 3,
            name: "E-Commerce Pemesanan Makanan via WhatsApp Terjadwal",
            description: "Pemesanan makanan langsung via WhatsApp dengan fitur penjadwalan otomatis.",
            category: "static",
            image: "images/restoran1.png",
            demoLink: "https://sample-restov1.appsku.my.id/checkout.html",
            cartLink: "https://sample-restov1.appsku.my.id/checkout.html",
            details: "Solusi pemesanan makanan praktis untuk pelanggan melalui WhatsApp. Fitur ini memungkinkan pelanggan memilih menu langsung dari website dan mengatur jadwal pengiriman sesuai keinginan. Cocok untuk pre-order harian, catering mingguan, atau pemesanan event. Notifikasi otomatis dan integrasi kalender memudahkan pengelolaan pesanan tanpa ribet."
        },
        {
            id: 4,
            name: "Smart School",
            description: "Sistem untuk memanage school",
            category: "dinamis",
            image: "images/smartschools.png",
            demoLink: "https://demo.smart-school.in/site/login#",
            cartLink: "https://demo.smart-school.in/site/userlogin",
            details: "Smart School is Modern and Complete School Automation Software that suites to almost every school or educational institution from student admission to student leaving, from fees collection to exam results. It includes 40+ modules with 8 inbuilt users (Super Admin, Admin, Accountant, Teacher, Receptionist, Librarian, Parent and Student) panel."
        },
        {
            id: 5,
            name: "Belanja Perlengkapan Rumah Langsung Lewat WhatsApp",
            description: "Belanja kebutuhan rumah kini lebih mudah lewat WhatsApp, tanpa aplikasi tambahan..",
            category: "static",
            image: "images/eccomerce1.png",
            demoLink: "https://sample-eccom1.appsku.my.id/",
            cartLink: "https://sample-eccom1.appsku.my.id/",
            details: "Platform e-commerce sederhana yang memungkinkan pelanggan memesan berbagai perlengkapan dan kebutuhan rumah tangga langsung melalui WhatsApp. Pelanggan cukup memilih produk dari katalog online, lalu klik tombol “Pesan via WhatsApp” untuk langsung mengirim pesanan ke penjual. Cocok untuk toko retail, UMKM, atau usaha rumahan yang ingin menjangkau lebih banyak pelanggan tanpa sistem checkout rumit. Praktis, cepat, dan ramah pengguna."
        },
    ];

    const services = [
        {
            id: 1,
            name: "Pengembangan Aplikasi Kustom",
            description: "Pembuatan aplikasi web dan mobile sesuai kebutuhan spesifik bisnis Anda.",
            details: "Proses pengembangan: Analisis kebutuhan, UI/UX Design, Development (React, Node.js, React Native), Testing & QA, Deployment & Maintenance. Teknologi: Modern web frameworks, Cloud deployment, Database optimization. Portofolio: 50+ aplikasi berhasil dikembangkan."
        },
        {
            id: 2,
            name: "Otomatisasi Proses Bisnis",
            description: "Implementasi solusi otomatisasi untuk meningkatkan efisiensi operasional.",
            details: "Layanan otomatisasi: Process mapping & analysis, RPA implementation, Workflow automation, Integration dengan sistem existing. Manfaat: Efisiensi hingga 70%, Reduce human error, Cost saving, Scalability. Teknologi: Python automation, API integration, Cloud workflows."
        },
        {
            id: 3,
            name: "Pengembangan Chatbot AI",
            description: "Pembuatan chatbot cerdas untuk layanan pelanggan dan operasional.",
            details: "Platform chatbot: WhatsApp Business API, Telegram Bot, Web chat widget, Facebook Messenger. Fitur AI: Natural Language Processing, Intent recognition, Multi-language support, Learning capabilities. Integrasi: CRM systems, Database, Payment gateway, Analytics dashboard."
        },
        {
            id: 4,
            name: "DevOps Consulting",
            description: "Konsultasi dan implementasi praktik DevOps untuk siklus pengembangan yang lebih cepat.",
            details: "Layanan DevOps: CI/CD pipeline setup, Infrastructure as Code (Terraform), Container orchestration (Docker, Kubernetes), Monitoring & logging (Prometheus, Grafana), Cloud migration (AWS, GCP, Azure), Security best practices, Performance optimization."
        }
    ];

    const productGrid = document.querySelector(".product-grid");
    const serviceGrid = document.querySelector(".service-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("detailModal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalDetails = document.getElementById("modalDetails");
    const whatsappForm = document.getElementById("whatsappForm");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("header nav");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Render Products
    function renderProducts(filter = "all") {
        productGrid.innerHTML = "";
        const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-card-content">
                    <span class="category-badge">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <div class="product-card-actions">
                        <a href="${product.demoLink}" class="btn secondary" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                        <a href="${product.cartLink}" class="btn primary" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                        <button class="btn secondary view-detail-btn" data-id="${product.id}" data-type="product"><i class="fas fa-eye"></i> View Detail</button>
                        <a href="https://wa.me/6287886425562?text=${encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}. Bisa berikan informasi lebih lanjut?`)}" class="btn primary" target="_blank"><i class="fab fa-whatsapp"></i> Send Message</a>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Render Services
    function renderServices() {
        serviceGrid.innerHTML = "";
        services.forEach(service => {
            const serviceCard = document.createElement("div");
            serviceCard.classList.add("service-card");
            serviceCard.innerHTML = `
                <div class="service-card-content">
                    <h4>${service.name}</h4>
                    <p>${service.description}</p>
                    <div class="service-card-actions">
                        <button class="btn secondary view-detail-btn" data-id="${service.id}" data-type="service"><i class="fas fa-eye"></i> View Detail</button>
                        <a href="https://wa.me/6287886425562?text=${encodeURIComponent(`Halo, saya tertarik dengan layanan ${service.name}. Bisa berikan informasi lebih lanjut?`)}" class="btn primary" target="_blank"><i class="fab fa-whatsapp"></i> Send Message</a>
                    </div>
                </div>
            `;
            serviceGrid.appendChild(serviceCard);
        });
    }

    // Filter Products
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderProducts(button.dataset.category);
        });
    });

    // Show Detail Modal
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-detail-btn")) {
            const id = parseInt(e.target.dataset.id);
            const type = e.target.dataset.type;
            let item;

            if (type === "product") {
                item = products.find(p => p.id === id);
            } else if (type === "service") {
                item = services.find(s => s.id === id);
            }

            if (item) {
                modalTitle.textContent = item.name;
                modalDescription.textContent = item.description;
                modalDetails.textContent = item.details;
                modal.style.display = "flex";
            }
        }
    });

    // Close Modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // WhatsApp Form Submission
    whatsappForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "6287886425562";
        const whatsappText = `Halo, saya ${name} (${email}). Saya ingin bertanya tentang ${messageType}. Pesan saya: ${message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

        window.open(whatsappUrl, "_blank");
    });

    // Initial render
    renderProducts();
    renderServices();
});

