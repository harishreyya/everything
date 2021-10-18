let container = document.getElementById("data")
    async function searchNews(){
        let query = document.getElementById("news").value;

   let res = await fetch(`http://newsapi.org/v2/everything?qInTitle=${query}&from=2021-10-17&to=2021-09-18&sortBy=popularity&apiKey=2347eae915154fcda6e82e5082c1cf4f`)
    
    let data = await res.json();
    shownews(data)
    console.log(data)
    }
   
   function shownews(news){
       container.innerHTML = null;
       let name = document.createElement("p");
       name.innerText = news.articles[0].author;
       let img = document.createElement("img");
       img.src = news.articles[0].urlToImage;
       let title = document.createElement("p");
       title.innerText = news.articles[0].title;
       let name1 = document.createElement("p");
       name.innerText = news.articles[1].author;
       let img1 = document.createElement("img");
       img.src = news.articles[1].urlToImage;
       let title1 = document.createElement("p");
       title.innerText = news.articles[1].title;
       let name2 = document.createElement("p");
       name.innerText = news.articles[2].author;
       let img2 = document.createElement("img");
       img.src = news.articles[2].urlToImage;
       let title2 = document.createElement("p");
       title.innerText = news.articles[3].title;
       let name3 = document.createElement("p");
       name.innerText = news.articles[3].author;
       let img3 = document.createElement("img");
       img.src = news.articles[3].urlToImage;
       let title3 = document.createElement("p");
       title.innerText = news.articles[3].title;

       container.append(name,img,title,name1,img1,title1,name2,img2,title2,name3,img3,title3)
   }