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
/*新增產品 */
window.onload=function(){
    let product=[
        ['肥美鮭魚','原產地(國):智利','特價:320元','product/product1.jpg']
        ,['特級鮮乳','原產地(國):臺灣','特價:90元','product/product2.jpg']
        ,['豪華咖啡蛋糕','原產地(國):美國','特價:129元','product/product3.jpg']
        ,['點點糖果','原產地(國):美國','特價:79元','product/candy.jpg']
        ,['高級巧克力','原產地(國):澳洲','特價:435元','product/chocolate.jpg']
        ,['漢堡','原產地(國):美國','特價:149元','product/hamburger.jpg']
        ,['柳橙果汁','原產地(國):臺灣','特價:60元','product/juice.jpg']
        ,['檸檬','原產地(國):臺灣','特價:29元','product/lemon.jpg']
        ,['義大利麵','原產地(國):義大利','特價:169元','product/noodles.jpg']
        ,['披薩','原產地(國):美國','特價:495元','product/pizza.jpg']
    ];
    let k = 0;
    for(number=0;number<product.length;number++){
        /*取得搜尋字串 */
        let search = localStorage.getItem("search");
        let search_fin= RegExp(search);
        /*判斷是否為空字串 */
        if (search===""){
        document.getElementsByClassName('none')[0].style.display='block';
        document.getElementsByClassName('none_p')[0].style.display='block';
        document.getElementsByClassName('product_page')[0].style.border='1px red solid';
        return;}
        /*判斷是否有搜尋到產品*/
        if((search_fin.test(product[number][1])===true)||(search_fin.test(product[number][0])===true)){
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
        create_div.appendChild(img_pro);
        /*商品標題 */
        let title_div=document.createElement("div");
        title_div.className+="pro_title";
        create_div.appendChild(title_div)
        let title=document.createTextNode(product[number][0]);
        title_div.appendChild(title);
        /*商品內容 */
        let con_div=document.createElement("div");
        con_div.className+="pro_con";
        create_div.appendChild(con_div)
        let con_mad=document.createTextNode(product[number][1]);
        con_div.appendChild(con_mad);
        /*價格 */
        let price_div =document.createElement("div");
        price_div.className+="price";
        create_div.appendChild(price_div)
        let price=document.createTextNode(product[number][2]);
        price_div.appendChild(price);
        /*計算數量 */
        k++;
        console.log(k);}
    }
    /**/
    if (k===0){
      document.getElementsByClassName('none')[0].style.display='block';
      document.getElementsByClassName('none_p')[0].style.display='block';
      document.getElementsByClassName('product_page')[0].style.border='1px red solid';
    }else{
      document.getElementsByClassName('result')[0].style.display='block';
      document.getElementsByClassName('result')[0].innerHTML="搜尋結果共計:"+k+"項商品";
    }
    search="無資料";
    localStorage.setItem("search",search);
}

