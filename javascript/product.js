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
/*新增產品 */
window.onload=function(){
    for(number=0;number<product.length;number++){
        /*創建商品div*/
        let create=document.getElementById("product_create");
        let block=document.createElement("div");
        block.className+="pro_div";
        block.setAttribute('id','div_id'+number)
        create.appendChild(block);
        /*商品圖片 */
        let create_div=document.getElementById('div_id'+number);
        let img_pro=document.createElement("img");
        img_pro.src=product[number][3];
        img_pro.className+="product_img";
        img_pro.setAttribute('id','product_id'+number);
        img_pro.setAttribute('onclick','product_pages('+number+')')
        create_div.appendChild(img_pro);
        /*商品標題 */
        let title_div=document.createElement("div");
        title_div.className+="pro_title";
        create_div.appendChild(title_div)
        title_div.setAttribute('onclick','product_pages('+number+')')
        let title=document.createTextNode(product[number][0]);
        title_div.appendChild(title);
        /*商品內容 */
        let con_div=document.createElement("div");
        con_div.className+="pro_con";
        con_div.setAttribute('onclick','product_pages('+number+')')
        create_div.appendChild(con_div)
        let con_mad=document.createTextNode(product[number][1]);
        con_div.appendChild(con_mad);
        /*價格 */
        let price_div =document.createElement("div");
        price_div.className+="price";
        price_div.setAttribute('onclick','product_pages('+number+')')
        create_div.appendChild(price_div)
        let price=document.createTextNode(product[number][2]);
        price_div.appendChild(price);
        /*購物車按鈕 */
        let shopping_cart =document.createElement("button");
        shopping_cart.className+="cart";
        create_div.appendChild(shopping_cart)
        let cart=document.createTextNode("加入購物車");
        shopping_cart.setAttribute('id','button'+number);
        shopping_cart.setAttribute('onclick','addcart('+number+');');
        shopping_cart.appendChild(cart);
        /*建立加入購物車img */
        let pro_img = document.createElement("img");
        pro_img.src=product[number][3];
        pro_img.className+="pro_img";
        pro_img.setAttribute('id','img'+number)
        create_div.appendChild(pro_img);
    }
}

/*加入購物車及動畫 */
let action = true;
function addcart(number){
  counts = localStorage.getItem("product"+number);
  let ball = document.getElementById('img'+number)
  let bodyTop = document.documentElement.scrollTop;
  if(action ===true){
  action=false;
  if (counts>=15){
    counts=15
    localStorage.setItem("product"+number,15);
    alert("已達購物車一次購買數量最大上限");
  }else{
      ball.style.display = 'block';
      ball.style.transition = 'left 0s, top 0s ,width 0s,height 0s,transform 0s';
      
      setTimeout(()=>{
          ball.style.left = '95vw';
          ball.style.top = '95vh';
          ball.style.transform="rotate(360deg)";
          ball.style.width = '0%';
          ball.style.height = '0%';
          ball.style.transition = 'left 0.4s, top 0.4s ,width 0.4s,height 0.4s,transform 0.4s';
      }, 50)
      ball.style.width = '14.5vw';
      ball.style.height = '10.5vw';
      ball.style.transform="rotate(0deg)";
    counts++;
    localStorage.setItem("product"+number,counts);
  }
  let img = document.getElementById('product_id'+number);
  ball.style.left = img.offsetLeft+'px';
  ball.style.top =  (img.offsetTop-bodyTop)+'px';
  setTimeout(()=>{
    action=true;
  },400)
}else{
  return;
}
}



  /*呼叫商品頁面 */
  function product_pages(product){
    localStorage.setItem("product_pages",product);
    location.href="product_pages.html";
  }

