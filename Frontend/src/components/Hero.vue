<script setup>
const carouselItems = [
  {
    title: "Proident occaecat",
    subtitle: "Aliquip ex ea commodo consequat",
    description: "You are permitted to use this Zay CSS template for your commercial websites.",
    image: new URL('../assets/water bottle.jpg', import.meta.url).href,
  },
  {
    title: "Nostrud exercitation",
    subtitle: "Ullamco laboris nisi ut aliquip",
    description: "This is another item in the carousel, use this for more content display.",
    image: new URL('../assets/water bottle.jpg', import.meta.url).href,
  },
  {
    title: "Cillum dolore",
    subtitle: "Eu fugiat nulla pariatur",
    description: "Yet another item to show how dynamic this carousel can be.",
    image: new URL('../assets/water bottle.jpg', import.meta.url).href,
  },
];
</script>

<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" class="active" aria-current="true"
        aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <!-- First slide -->
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <!-- Text Content -->
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
            </div>
            <!-- Image -->
            <div class="col-md-8 d-flex justify-content-end">
              <img src="../assets/water bottle.jpg" alt="carousel image" class="img-fluid wider-img"
                style="height: 500px; margin-top: 50px;">
            </div>
          </div>
        </div>
      </div>

      <!-- Second slide -->
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
            </div>
            <div class="col-md-8 d-flex justify-content-end">
              <img src="../assets/watch.jpg" alt="carousel image" class="img-fluid wider-img"
                style="height: 500px; margin-top: 50px;">
            </div>
          </div>
        </div>
      </div>

      <!-- Third slide -->
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex flex-column justify-content-center">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
            </div>
            <div class="col-md-8 d-flex justify-content-end ">
              <img src="../assets/water bottle.jpg" alt="carousel image" class="img-fluid wider-img"
                style="height: 500px; margin-top: 50px;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>

.carousel-inner {
  background-color: rgb(222, 222, 222);
}

.carousel-control-prev{
  color: red;

}

.carousel-control-prev-icon {
color: red;
}

.visually-hidden {
  color: red;
}
.row {
  justify-content: space-between;
  align-items: center;
}

.carousel-item {
  height: 600px;
}

.carousel img {
  max-width: 100%;
  height: auto;
}

.wider-img {
  max-width: 700px;
}

@media (min-width: 768px) {
  .wider-img {
    max-width: 900px;
  }
}

.container {
  max-width: 1200px;
}
</style>
