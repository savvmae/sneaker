var addedToCart = 'Added To Cart'
var shoppingCartCount = 0

var productDetails =`<h2 class="main-body-headers"> Product Details </h2>
          <p class="main-body-p">
            Here are some details about products. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
`
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

///tried to use add class for these like so-- couldnt get the class to add, on inspect it appeared class had been added but no physical changes were seen.
// $('#reviews-tab').on('mouseenter', function(){
//   $(reviews-tab).addClass('.mouse-enter-tabs-class');
//
// also tried to create variable to assign tab class like in the exercises to no avail..
// $('.content-tabs').on('mouseenter', function(){
//  var tab = $(this).attr('which-tab');
//  $('which-tab').addClass('which-tab-'+tab);
//  });
//  })
//when that method was attempted there was a which class identifier assiged to all li's individually within content tabs.
//was able to acheive the long way but would love to have it condensed!

$('#PD').on('mouseenter', function (){
  $('#PD').css({
    borderBottom: '10px solid pink'
  });
})
$('#SF').on('mouseenter', function(){
  $('#SF').css({
    borderBottom: '10px solid pink'
  });
})
$('#reviews-tab').on('mouseenter', function(){
  $('#reviews-tab').css({
    borderBottom: '7px solid pink'
  });
})


$('#PD').on('mouseleave', function (){
  $('#PD').css({
    borderBottom: 'none'
  });
})

$('#SF').on('mouseleave', function(){
  $('#SF').css({
    borderBottom: 'none'
  });
})
$('#reviews-tab').on('mouseleave', function(){
  $('#reviews-tab').css({
    borderBottom: 'none'
  });
})

$('#PD').on('click', function (){
  document.querySelector('#customers-saying').innerHTML =" "
  document.querySelector('#Size-fit').innerHTML = " "
  document.querySelector('#product-details').innerHTML = `<h2 class="main-body-headers"> Product Details </h2>
            <p class="main-body-p">
              Here are some details about products. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p> <h3 class="main-body-headers"> Exciting Topic </h3>
          <p class="main-body-p">
            Stuff about said topic...
          </p>`
});

$('#SF').on('click', function(){
  document.querySelector('#product-details').innerHTML = " "
  document.querySelector('#customers-saying').innerHTML = " "
  document.querySelector('#Size-fit').innerHTML = `<h2 class="main-body-headers"> Find Your Shoe Size and Fit </h2>
          <p class="main-body-p">
            Here's some content about that.
          </p>`
});

$('#reviews-tab').on('click', function(){
  document.querySelector('#product-details').innerHTML = " "
  document.querySelector('#Size-fit').innerHTML = " "
  document.querySelector('#customers-saying').innerHTML = `<h2 class="main-body-headers">Here's What our Customers are saying!</h2>
          <p class="main-body-p">Don't Take our word for it. Read what our customers have been saying about this product! We hope you wont be disapointed in your purchase.
          </p> `
});
