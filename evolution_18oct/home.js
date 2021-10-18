fetch("http://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=2347eae915154fcda6e82e5082c1cf4f")
.then(function(res){
    return res.json();
})
.then(function(res){
   showProducts(res)
   console.log(res)
});


let container = document.getElementById("products")

function showProducts(products){
    products.forEach(function(product){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = product.article.urlToImage;
        let title = document.createElement("p");
        title.innerText = product.article.title;
      div.append(img,title)

      container.append(div)
    })
}
showProducts(products)


