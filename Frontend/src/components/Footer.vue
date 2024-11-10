<script setup>

</script>


<template>
    <footer>
        <div class="container">
            <div class="row">




                <div class="col">
                    <div class="logo-footer">
                        <h3>Ray Shop</h3>
                        <ul class="contact-footer">
                            <li><i class="bi bi-geo-alt-fill"></i>123 Consectetur at ligula 10660</li>
                            <li><i class="bi bi-telephone-fill"></i> 010-020-0340</li>
                            <li><i class="bi bi-envelope-fill"></i> info@company.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col">

                    <div class="head-footer">
                        <h3>Products</h3>


                        <ul>
                            <li>Luxury</li>
                            <li>Sport Wear</li>
                            <li>Men's Shoes</li>
                            <li>Women's Shoes</li>
                            <li>Popular Dress</li>
                            <li>Gym Accessories</li>
                            <li>Sport Shoes</li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <h3>Further Info</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Shop Locations</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div class="contact-me">
                <ul class="icon-contact">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>

                </ul>

                <div class="send-email">
                    <input type="email" placeholder="Email Address">
                    <button>Subscribe</button>
                </div>
            </div>


            <div class="coppy-right">
                <p>Copyright © 2024 Company Name | Designed by <a href="">Tanapon</a></p>
            </div>




        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: rgb(7, 43, 72);
    color: rgb(202, 202, 202);
    width: 100%;
    padding: 40px 0;
}

footer .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
}

ul li {
    list-style: none;
    padding-left: 0; /* ลบการเยื้องจากทางซ้าย */
    margin-left: -10px; /* ขยับให้เริ่มต้นจากด้านซ้ายสุด */
}

.logo-footer h3 {
    color: #ff9800;
    margin: 0; /* ปรับให้ไม่มีระยะห่างจากขอบ */
}

.logo-footer h3:hover {
    color: #ffa726; /* เปลี่ยนสีเมื่อ hover */
}

.contact-footer {
    margin-top: 10px; /* เพิ่มระยะห่างด้านบนของ ul */
}

.contact-me {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    flex-wrap: wrap; /* เพื่อให้ responsive เมื่อหน้าจอเล็ก */
}

.contact-me button {
    padding: 10px 20px;
    background-color: #ff9800;
    color: #fff; /* ปรับให้ปุ่มมีสีขาวเพื่อเน้นข้อความ */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-me button:hover {
    background-color: #e68900; /* เพิ่มการเปลี่ยนสีเมื่อ hover */
}

.icon-contact {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 10px;
}

.icon-contact i {
    font-size: 1.5rem;
    color: rgb(202, 202, 202);
    background-color: rgb(7, 43, 72);
    padding: 10px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transition: background-color 0.3s ease;
}

.icon-contact i:hover {
    color: black;
    background-color: #fff;
}

.send-email input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 250px;
    margin-right: 10px; /* เพิ่มระยะห่างระหว่าง input กับปุ่ม */
}

.coppy-right {
    text-align: center;
    padding-top: 20px;
    color: rgb(150, 150, 150); /* ปรับสีให้จางลงเพื่อให้ดูไม่เด่นเกินไป */
}

/* Media queries เพื่อปรับแต่งให้ responsive */
@media (max-width: 768px) {
    .contact-me {
        flex-direction: column;
        gap: 20px; /* เพิ่มระยะห่างเมื่อเป็น column */
    }

    .send-email input {
        width: 100%; /* ปรับขนาดให้เต็มเมื่อหน้าจอแคบ */
    }

    .send-email button {
        width: 100%; /* ปรับปุ่มให้เต็มขนาดในหน้าจอเล็ก */
    }
}


</style>