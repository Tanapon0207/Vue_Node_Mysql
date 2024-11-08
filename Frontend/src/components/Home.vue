<template>
  <header>

    <ul class="head-nav">
      <li> Ray@company.com </li>
      <li> 123-456-7890 </li>
    </ul>
    <nav>


      <div class="container">

        <div class="nav-con">
          <div class="logo">
            <a href="">Ray</a>
          </div>
          <ul class="menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>


          <div class="btn-login">
            <router-link to="/login"><p>Login</p></router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo a {
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
  list-style: none;
  display: flex;
  padding: 10px;
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
  color: #f0a500;
  /* เปลี่ยนสีเมื่อ hover เป็นสีทอง */
}

.btn-login p{
  text-decoration: none;
  color: white;
  
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
