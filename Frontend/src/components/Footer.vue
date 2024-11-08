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
                            <li>123 Consectetur at ligula 10660</li>
                            <li> 010-020-0340</li>
                            <li> info@company.com</li>
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
                    <input type="text" placeholder="Email Address">
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
    border: 2px solid black;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    padding: 10px;

}

.row {
    border: 2px solid red;
}


.icon-contact {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 10px;
    /* เพิ่มระยะห่างระหว่างปุ่ม */
}

.icon-contact li {
    display: inline-block;
}

.icon-contact i {
    font-size: 1.5rem;
    color: white;
    background-color: #007bff;
    padding: 10px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transition: background-color 0.3s ease;
    /* เอฟเฟกต์เมื่อ hover */
}

.icon-contact i:hover {
    color: black;
    background-color: #fff;
}


.contact-me {

    border: 2px solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>