var addedToCart = 'Added To Cart'
var shoppingCartCount = 0

$('#buy-now').on('click', function (){
  $('#buy-now').css({
    backgroundColor:'#d83131',
    color: 'white'
  });
  $('#buy-now').text(addedToCart);
  shoppingCartCount += 1;
  $('#cart').text("Shopping Cart("+shoppingCartCount+")");
  $('#cart').css({
    fontFamily: 'sans-serif',
    color: '#ea7c70',
    fontSize: '14px',
    textDecoration: 'underline'
  });
})

$('#buy-now').on('mouseenter', function(){
  $('#buy-now').css({
    backgroundColor:'#d83131',
    color: 'white'
  });
})

$('#buy-now').on('mouseleave', function(){
  $('#buy-now').css({
    backgroundColor:'white',
    color: '#d83131'
  });
  $('#buy-now').text('Buy Now');
})

$('.tab').on('mouseenter', function() {
  $(this).siblings('.tab').removeClass("mouse-enter-tabs-class")
  $(this).addClass("mouse-enter-tabs-class")
})

$('#PD').on('click', function (){
  $('#customers-saying').html("")
  $('#Size-fit').html("")
  $('#product-details').html(`<h2 class="main-body-headers"> Product Details </h2>
            <p class="main-body-p">
              Here are some details about products. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p> <h3 class="main-body-headers"> Exciting Topic </h3>
          <p class="main-body-p">
            Stuff about said topic...
          </p>`)
});

$('#SF').on('click', function(){
  $('#product-details').("")
  $('#customers-saying').html("")
  $('#Size-fit').html(`<h2 class="main-body-headers"> Find Your Shoe Size and Fit </h2>
          <p class="main-body-p">
            Here's some content about that.
          </p>`)
});

$('#reviews-tab').on('click', function(){
  $('#product-details').html("")
  $('#Size-fit').html("")
  $('#customers-saying').html(`<h2 class="main-body-headers">Here's What our Customers are saying!</h2>
          <p class="main-body-p">Don't Take our word for it. Read what our customers have been saying about this product! We hope you wont be disapointed in your purchase.
          </p> `)
});
