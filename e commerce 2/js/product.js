$(document).ready(function () {
    GetProductsAjax("trend","#product");
    GetProductsAjax("latest","#latest-product");
    GetProductsAjax("recent","#Recent-product");
    GetAllProducts()
})

// document.onload= GetProductsAjax('trend')

function GetProductsAjax(Categoryname,DivRender) {
    $.ajax({
        url: 'products.json',
        dataType: 'json',
        success: function (result) {
            var product = "";
            $.each(result.products,
                function (key, item) {
                    if (item.category==Categoryname) {
                        product +=`<div class="product">
                        <div class="product-header">
                            <img src=${item.image} alt="">
                        </div>
                        <div class="product-footer">
                            <h3>${item.title}</h3>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="product-price">
                                <h4>${item.price}</h4>
                            </div>
                        </div>
                        <ul>
                            <li><a href=""><i class="far fa-eye"></i></a></li>
                            <li><a href=""><i class="far fa-heart"></i></a></li>
                            <li><a href=""><i class="far fa-sync"></i></a></li>
                        </ul>
                    </div>`
        
                    }

                })
                $(DivRender).html(product);
        },
    })
}


function GetAllProducts() {
    $.ajax({
        url: 'products.json',
        dataType: 'json',
        success: function (result) {
            var product = "";
            $.each(result.products,
                function (key, item) {
                   
                        product +=`<div class="product">
                        <div class="product-header">
                            <img src=${item.image} alt="">
                        </div>
                        <div class="product-footer">
                            <h3>${item.title}</h3>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="product-price">
                                <h4>${item.price}</h4>
                            </div>
                        </div>
                        <ul>
                            <li><a href=""><i class="far fa-eye"></i></a></li>
                            <li><a href=""><i class="far fa-heart"></i></a></li>
                            <li><a href=""><i class="far fa-sync"></i></a></li>
                        </ul>
                    </div>`
        
                    

                })
                $("#all-product").html(product);
        },
    })
}

// function GetProducts(Categoryname) {
//     $.getJSON("products.json",
//     function (data) {
//         var product="";
//         $.each(data.products,function(key,item){
//             if (item.category==Categoryname) {
//                 product +=`<div class="product">
//                 <div class="product-header">
//                     <img src=${item.image} alt="">
//                 </div>
//                 <div class="product-footer">
//                     <h3>${item.title}</h3>
//                     <div class="rating">
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                     </div>
//                     <div class="product-price">
//                         <h4>${item.price}</h4>
//                     </div>
//                 </div>
//                 <ul>
//                     <li><a href=""><i class="far fa-eye"></i></a></li>
//                     <li><a href=""><i class="far fa-heart"></i></a></li>
//                     <li><a href=""><i class="far fa-sync"></i></a></li>
//                 </ul>
//             </div>`

//             }
//         })
//         $(".product-center").html(product);
//         $(".filter-btn").addClass( "active");
//     }
// );
// }

// let btn= document.querySelector('.filter-btn')
// function btnfun(){
//     btn.classList.toggle('active')

// }
