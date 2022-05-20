  /*呼叫商品頁面 */
  function product_pages(product){
    localStorage.setItem("product_pages",product);
    location.href="product_pages.html";
  }
  /*跳頁*/
  function page(page){
    location.href=page;
  }
  /*跳頁及儲存跳頁資料 */
  function storage(page){
    let search = document.getElementById("search_block").value;
    localStorage.setItem("search",search);
    location.href=page;
  }
 
  /*載入 */
  window.onload=function(){
    let id = localStorage.getItem("product_pages");
    let product=[
        ['肥美鮭魚','原產地(國):智利','特價:320元','product/product1.jpg','320']
        ,['特級鮮乳','原產地(國):臺灣','特價:90元','product/product2.jpg','90']
        ,['豪華咖啡蛋糕','原產地(國):美國','特價:129元','product/product3.jpg','129']
        ,['點點糖果','原產地(國):美國','特價:79元','product/candy.jpg','79']
        ,['高級巧克力','原產地(國):澳洲','特價:435元','product/chocolate.jpg','435']
        ,['漢堡','原產地(國):美國','特價:149元','product/hamburger.jpg','149']
        ,['柳橙果汁','原產地(國):臺灣','特價:60元','product/juice.jpg','60']
        ,['檸檬','原產地(國):臺灣','特價:29元','product/lemon.jpg','29']
        ,['義大利麵','原產地(國):義大利','特價:169元','product/noodles.jpg','169']
        ,['披薩','原產地(國):美國','特價:495元','product/pizza.jpg','495']
    ];
    /*放入圖片 */
    let img_content=document.getElementById("image_content");
    let img_pro=document.createElement("img");
    img_pro.src=product[id][3];
    img_pro.className+="product_img";
    img_content.appendChild(img_pro);
  }



