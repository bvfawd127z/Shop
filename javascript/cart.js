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
 /*獲取購物車商品 */
 window.onload=function(){
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
    for(i=0;i<10;i++) {
       value= localStorage.getItem("product"+i);
       if (value>0){
        /*購物車商品列Div */
        let container=document.getElementById("container");
        let block_big =document.createElement("div");
        block_big.className+="cart_block";
        block_big.setAttribute('id','block_big'+i);
        container.appendChild(block_big);
        /*checkbox製作*/
        let block_b=document.getElementById('block_big'+i);
        let check =document.createElement("div");
        check.className+="cart_block_s check";
        check.setAttribute('id','check'+i);
        block_b.appendChild(check);
        let checkbox =document.createElement("input");
        checkbox.setAttribute('id','checkbox'+i);
        checkbox.setAttribute('type','checkbox');
        check.appendChild(checkbox);
        /*商品簡介div */
        let pro_content=document.createElement("div");
        pro_content.setAttribute('id','pro_content'+i);
        pro_content.className+="pro_content";
        block_b.appendChild(pro_content);
        /*商品名稱 */
        let pro_content_b=document.getElementById('pro_content'+i);
        let title_div=document.createElement("div");
        title_div.className+="pro_title";
        pro_content_b.appendChild(title_div)
        let title=document.createTextNode(product[i][0]);
        title_div.appendChild(title);
        /*商品圖片 */ 
        let img_pro=document.createElement("img");
        img_pro.src=product[i][3];
        img_pro.className+="product_img";
        img_pro.setAttribute('id','product_id'+i);
        pro_content_b.appendChild(img_pro);
        /*商品內容 */
        let con_div=document.createElement("div");
        con_div.className+="pro_con";
        pro_content_b.appendChild(con_div)
        let con_mad=document.createTextNode(product[i][1]+"。");
        con_div.appendChild(con_mad);
    }
}
}
