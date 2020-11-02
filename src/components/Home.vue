// Home.vue

<!-- nouislider -->
<style scoped src="../assets/css/nouislider.min.css"></style>

<template>
	<div>
		<!--- Header template for the site --->
		<Header></Header>
		
		<!-- Navigation menu -->
		<Navigation></Navigation>

		<!-- HOME -->
		<div id="home">
			<!-- container -->
			<div class="container">
				<!-- home wrap -->
				<div class="home-wrap">
					<!-- home slick -->
					<div id="home-slick">
						<!-- banner -->
						<div class="banner banner-1">
							<img src="../assets/img/banner01.jpg" alt="">
							<div class="banner-caption text-center">
								<h1>Bags sale</h1>
								<h3 class="white-color font-weak">Up to 50% Discount</h3>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
						<!-- /banner -->

						<!-- banner -->
						<div class="banner banner-1">
							<img src="../assets/img/banner02.jpg" alt="">
							<div class="banner-caption">
								<h1 class="primary-color">HOT DEAL<br><span class="white-color font-weak">Up to 50% OFF</span></h1>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
						<!-- /banner -->

						<!-- banner -->
						<div class="banner banner-1">
							<img src="../assets/img/banner03.jpg" alt="">
							<div class="banner-caption">
								<h1 class="white-color">New Product <span>Collection</span></h1>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
						<!-- /banner -->
					</div>
					<!-- /home slick -->
				</div>
				<!-- /home wrap -->
			</div>
			<!-- /container -->
		</div>
		<!-- /HOME -->

		<!-- section -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- banner -->
					<div class="col-md-4 col-sm-6">
						<a class="banner banner-1" href="#">
							<img src="../assets/img/banner10.jpg" alt="">
							<div class="banner-caption text-center">
								<h2 class="white-color">NEW COLLECTION</h2>
							</div>
						</a>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="col-md-4 col-sm-6">
						<a class="banner banner-1" href="#">
							<img src="../assets/img/banner11.jpg" alt="">
							<div class="banner-caption text-center">
								<h2 class="white-color">NEW COLLECTION</h2>
							</div>
						</a>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
						<a class="banner banner-1" href="#">
							<img src="../assets/img/banner12.jpg" alt="">
							<div class="banner-caption text-center">
								<h2 class="white-color">NEW COLLECTION</h2>
							</div>
						</a>
					</div>
					<!-- /banner -->

				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /section -->

		<!-- section -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- section-title -->
					<div class="col-md-12">
						<div class="section-title">
							<h2 class="title">Deals Of The Day</h2>
							<div class="pull-right">
								<div class="product-slick-dots-1 custom-dots"></div>
							</div>
						</div>
					</div>
					<!-- /section-title -->

					<!-- banner -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="banner banner-2">
							<img src="../assets/img/banner14.jpg" alt="">
							<div class="banner-caption">
								<h2 class="white-color">NEW<br>COLLECTION</h2>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
					</div>
					<!-- /banner -->

					<!-- Product Slick -->
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<div id="product-slick-1" class="product-slick">
								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span>New</span>
											<span class="sale">-20%</span>
										</div>
										<ul class="product-countdown">
											<li><span>00 H</span></li>
											<li><span>00 M</span></li>
											<li><span>00 S</span></li>
										</ul>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product01.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span class="sale">-20%</span>
										</div>
										<ul class="product-countdown">
											<li><span>00 H</span></li>
											<li><span>00 M</span></li>
											<li><span>00 S</span></li>
										</ul>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product07.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span>New</span>
											<span class="sale">-20%</span>
										</div>
										<ul class="product-countdown">
											<li><span>00 H</span></li>
											<li><span>00 M</span></li>
											<li><span>00 S</span></li>
										</ul>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product06.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span>New</span>
											<span class="sale">-20%</span>
										</div>
										<ul class="product-countdown">
											<li><span>00 H</span></li>
											<li><span>00 M</span></li>
											<li><span>00 S</span></li>
										</ul>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product08.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->
							</div>
						</div>
					</div>
					<!-- /Product Slick -->
				</div>
				<!-- /row -->

				<!-- row -->
				<div class="row">
					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
							<h2 class="title">Deals Of The Day</h2>
							<div class="pull-right">
								<div class="product-slick-dots-2 custom-dots">
								</div>
							</div>
						</div>
					</div>
					<!-- section title -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single product-hot">
							<div class="product-thumb">
								<div class="product-label">
									<span class="sale">-20%</span>
								</div>
								<ul class="product-countdown">
									<li><span>00 H</span></li>
									<li><span>00 M</span></li>
									<li><span>00 S</span></li>
								</ul>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Slick -->
					<div class="col-md-9 col-sm-6 col-xs-6">
						<div class="row">
							<div id="product-slick-2" class="product-slick">
								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product06.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50</h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span class="sale">-20%</span>
										</div>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product05.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product04.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50</h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

								<!-- Product Single -->
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span>New</span>
											<span class="sale">-20%</span>
										</div>
										<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img src="../assets/img/product03.jpg" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o empty"></i>
										</div>
										<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
								<!-- /Product Single -->

							</div>
						</div>
					</div>
					<!-- /Product Slick -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /section -->

		<!-- section -->
		<div class="section section-grey">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- banner -->
					<div class="col-md-8">
						<div class="banner banner-1">
							<img src="../assets/img/banner13.jpg" alt="">
							<div class="banner-caption text-center">
								<h1 class="primary-color">HOT DEAL<br><span class="white-color font-weak">Up to 50% OFF</span></h1>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="col-md-4 col-sm-6">
						<a class="banner banner-1" href="#">
							<img src="../assets/img/banner11.jpg" alt="">
							<div class="banner-caption text-center">
								<h2 class="white-color">NEW COLLECTION</h2>
							</div>
						</a>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="col-md-4 col-sm-6">
						<a class="banner banner-1" href="#">
							<img src="../assets/img/banner12.jpg" alt="">
							<div class="banner-caption text-center">
								<h2 class="white-color">NEW COLLECTION</h2>
							</div>
						</a>
					</div>
					<!-- /banner -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /section -->

		<!-- section -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
							<h2 class="title">Latest Products</h2>
						</div>
					</div>
					<!-- section title -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product02.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product03.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product04.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->
				</div>
				<!-- /row -->

				<!-- row -->
				<div class="row">
					<!-- banner -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="banner banner-2">
							<img src="../assets/img/banner15.jpg" alt="">
							<div class="banner-caption">
								<h2 class="white-color">NEW<br>COLLECTION</h2>
								<button class="primary-btn">Shop Now</button>
							</div>
						</div>
					</div>
					<!-- /banner -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product07.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product06.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product05.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->
				</div>
				<!-- /row -->

				<!-- row -->
				<div class="row">
					<!-- section title -->
					<div class="col-md-12">
						<div class="section-title">
							<h2 class="title">Picked For You</h2>
						</div>
					</div>
					<!-- section title -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product04.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product03.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product02.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->

					<!-- Product Single -->
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="product product-single">
							<div class="product-thumb">
								<div class="product-label">
									<span>New</span>
									<span class="sale">-20%</span>
								</div>
								<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
								<img src="../assets/img/product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<div class="product-btns">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<!-- /Product Single -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /section -->

		<!--- Fotter template for the site --->
		<Footer></Footer>

		<!-- jQuery Plugins -->
	</div>


</template>

<script>

	import Header from './Header.vue'
	import Footer from './Footer.vue'
	import Navigation from './Navigation.vue'
	
	global.jQuery = require('jquery')
	var $ = global.jQuery
	window.$ = $
	window.jQuery = global.jQuery
	
	// require ('../assets/js/jquery.min.js')
	
	// import '../assets/js/jquery.min.js'
	// import '../assets/js/bootstrap.min.js'
	
	// import '../assets/js/slick.min.js'
	import '../assets/js/nouislider.min.js'
	// import '../assets/js/jquery.zoom.min.js'
	
	// import '../assets/js/main.js'
	
	export default {
		name: 'Home',
		components: {
			'Header': Header,
			'Footer': Footer,
			'Navigation': Navigation,
		},
		data (){
			return {
				state : this.$store.state,
				
				
			}
		},
		validations: {
        },
		computed : {
			
		},
		methods : {
			
		},
		watch: {
		},
		// called after data() is set, so make api calls on this
		created: function () {
		},
		// called after DOM is ready so do dom manipulations here.
		mounted: function () {
			
				
			// HOME SLICK
			$('#home-slick').slick({
				autoplay: true,
				infinite: true,
				speed: 300,
				arrows: true,
			})
			
			// PRODUCTS SLICK
			$('#product-slick-1').slick({
				slidesToShow: 3,
				slidesToScroll: 2,
				autoplay: true,
				infinite: true,
				speed: 300,
				dots: true,
				arrows: false,
				appendDots: '.product-slick-dots-1',
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 480,
						settings: {
							dots: false,
							arrows: true,
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				]
			});

			$('#product-slick-2').slick({
				slidesToShow: 3,
				slidesToScroll: 2,
				autoplay: true,
				infinite: true,
				speed: 300,
				dots: true,
				arrows: false,
				appendDots: '.product-slick-dots-2',
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 480,
						settings: {
							dots: false,
							arrows: true,
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				]
			});

			// PRODUCT DETAILS SLICK
			$('#product-main-view').slick({
				infinite: true,
				speed: 300,
				dots: false,
				arrows: true,
				fade: true,
				asNavFor: '#product-view',
			});

			$('#product-view').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				centerMode: true,
				focusOnSelect: true,
				asNavFor: '#product-main-view',
			});
		}
	}
</script>


