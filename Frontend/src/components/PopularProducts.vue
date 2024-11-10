<script setup>

</script>


<template>

    <div class="popular-product">
      
        <div class="container">
            <hr>
         
            <div class="text-head">
                <h1>Popular Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia.</p>
            </div>


            <div class="card-product">
                <div class="row">
                    <div class="col-md-3" >
                        <div class="card" style="width: 18rem;" data-aos="fade-up">
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="head-card">
                                    <div class="star">
                                        <ul>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div class="price">
                                        <h4>$100</h4>
                                    </div>

                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of
                                    the
                                    card's content.</p>
                                <p>Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;" data-aos="fade-up">
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="head-card">
                                    <div class="star">
                                        <ul>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div class="price">
                                        <h4>$100</h4>
                                    </div>

                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of
                                    the
                                    card's content.</p>
                                <p>Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;" data-aos="fade-up">
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="head-card">
                                    <div class="star">
                                        <ul>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div class="price">
                                        <h4>$100</h4>
                                    </div>

                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of
                                    the
                                    card's content.</p>
                                <p>Reviews (24)</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;" data-aos="fade-up">
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="head-card">
                                    <div class="star">
                                        <ul>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                            <li><i class="bi bi-star"></i></li>
                                        </ul>
                                    </div>

                                    <div class="price">
                                        <h4>$100</h4>
                                    </div>

                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk
                                    of
                                    the
                                    card's content.</p>
                                <p>Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    </div>
</template>


<style scoped>
.popular-product {
    height: 600px;

    /* background-color: rgb(127, 195, 214); */
}

.card-product{
    margin-top: 30px;
}

.text-head {
    text-align: center;
}

.head-card{
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
}

.star ul li{
    list-style: none;
    display:inline;
}
</style>