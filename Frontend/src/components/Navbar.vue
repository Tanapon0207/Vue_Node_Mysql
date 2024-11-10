<template>
  <header>

    <ul class="head-nav">
      <li><i class="bi bi-envelope-fill"></i> Ray@company.com </li>
      <li><i class="bi bi-telephone-fill"></i> 123-456-7890 </li>
    </ul>
    <nav>


      <div class="container">

        <div class="nav-con">
          <div class="logo">
            <p><b>Ray</b></p>
          </div>
          <ul class="menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>



          <router-link to="/login">
            <button class="btn-login">Login</button>
          </router-link>

        </div>
      </div>
    </nav>
  </header>




</template>

<style scoped>
.logo p {
  font-size: 1.8rem;
  color: #fff;
  /* ใช้สีขาวเพื่อความโดดเด่น */
  text-decoration: none;
  /* ลบเส้นขีดใต้ */
}

nav {
  background-color: rgb(7, 43, 72);
  padding: 10px 0;
  /* เพิ่มระยะห่างด้านบนและล่าง */
}

.head-nav {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  padding: 10px;

}

.head-nav li {
  margin-right: 20px;
  list-style: none;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.nav-con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.menu {
  display: flex;
  list-style: none;
}

.menu li {
  list-style: none;
  margin-left: 1.5rem;
  /* เพิ่มระยะห่างระหว่างรายการเมนู */
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  /* ขนาดใหญ่ขึ้นเล็กน้อย */
  transition: color 0.3s ease;
  /* เพิ่มเอฟเฟกต์เมื่อ hover */
}

.menu a:hover {
  color: #ff9800;
  /* เปลี่ยนสีเมื่อ hover เป็นสีทอง */
}


.btn-login {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 35px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.4s, color 0.4s;
  overflow: hidden;

}


.btn-login::before,

.btn-login::after {

  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.4s, transform 0.4s;

}


.btn-login:hover::before,

.btn-login:hover::after {

  opacity: 1;
  transform: scale(1.1);


}



.btn-login:hover {

  color: #ff9800;

}



.btn-login:active {

  background-color: #fbd37b;
  color: #111;
  transition: background-color 0.2s, color 0.2s;

}




.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-container {
  padding-left: 2rem;
}

.carousel-title {
  font-size: 2.5rem;
  color: #3aa27f;
}

.carousel-description {
  font-size: 1.2rem;
  font-weight: bold;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-inner {
  display: flex;
  align-items: center;
  height: 500px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #a0c5a8;
  border-radius: 50%;
  padding: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  filter: opacity(0.7);
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  filter: opacity(1);
}


/* สำหรับหน้าจอขนาดเล็ก */
@media screen and (max-width: 360px) {

  .nav-con {
    flex-direction: column;
    padding: 1rem 0;
    height: auto;
  }

  .menu {
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }

  .menu li {
    margin-left: 0;
    padding: 1rem 0;
    width: 100%;
    transition: background-color 0.3s ease;
    /* เพิ่มเอฟเฟกต์การเปลี่ยนแปลงเมื่อ hover */
  }

  .menu li:hover {
    background-color: #444;
    /* เปลี่ยนพื้นหลังเมื่อ hover */
  }

  .logo {
    margin-bottom: 1rem;
  }
}
</style>
