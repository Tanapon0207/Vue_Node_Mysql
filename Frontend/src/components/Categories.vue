<script>
</script>

<template>
    <div class="container">
        <div class="categories">
            <h1>Categories</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus?</p>
        </div>


        <div class="categories-products">
            <div class="row">
                <div class="col">
                    <img src="https://images.unsplash.com/photo-1671073437657-acdd1ca6c11d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h3>Category 1</h3>
                    <button>Go Shop</button>
                </div>
                <div class="col">
                    <img src="https://images.unsplash.com/photo-1671073437657-acdd1ca6c11d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h3>Category 1</h3>
                    <button>Go Shop</button>
                </div>
                <div class="col">
                    <img src="https://images.unsplash.com/photo-1671073437657-acdd1ca6c11d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h3>Category 1</h3>
                    <button>Go Shop</button>
                </div>
             
            </div>
        </div>
    </div>


</template>


<style scoped>


.categories {
    text-align: center;
    margin-top: 50px;
}

.categories-products {
    padding: 50px;
}

.row {
    display: flex;
    justify-content: space-between; /* กระจายคอลัมน์ให้เท่ากัน */
    flex-wrap: wrap; /* เพื่อให้คอลัมน์แตกบรรทัดเมื่อหน้าจอเล็ก */
}

.col {
    flex-basis: 30%; /* กำหนดให้แต่ละคอลัมน์ใช้พื้นที่ 30% ของ container */
    text-align: center;
}

.categories-products img {
    
    border-radius: 50%;
    height: 300px;
    width: 300px;
}

.categories-products h3 {
    margin-top: 10px;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff9800;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

</style>