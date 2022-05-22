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
    let explain = [
       ("★五星等級老饕推薦，簡單香煎就可上桌 \n ★已去鱗去骨去刺，料理方便，營養價值高 \n ★肉質細緻有彈性，紮實鮮甜，油脂豐富入口滑順 \n 重量：約200g*4片 \n 內容物：鮭魚 \n 保存方式：冷凍-18度c以下")
        ,('一杯500毫升的純牛乳，熱量在300大卡左右。\n低脂牛奶的脂肪約是新鮮普通牛奶的50%左右，熱量減少。\n適合需控制飲食的糖尿病患者、心血管疾病患者、肥胖人士及消化能力較弱或腹瀉的嬰兒飲用。')
        ,('它是用麵粉與雞蛋、牛奶、堅果和蜂蜜混合而成的。\n蛋糕大致分為幾類，主要基於成分和混合技術。\n雖然蛋糕和麵包之間區別的明確例子很容易找到，但精確的分類一直難以捉摸。\n黃油蛋糕由奶油黃油、糖、雞蛋和麵粉製成。')
        ,('1.商品組合/規格：135g/包\n2.商品品名：【點點糖果】 混合水果口味量販包(135g)\n3.商品重(容)量：135g\n4.內容物名稱(成分)：砂糖、葡萄糖漿、棕櫚油、檸檬酸、糊精、香料、麥芽糊精、棕櫚蠟、食用黃色五號。')
        ,('是以可可樹的種子作為主要原料製作的食品，它可以是固體、液體或膏狀，也可作為其他食品的調味料。\n巧克力的出現最早可以追溯到公元前19世紀的奧爾梅克文明，在其遺址發現飲用巧克力飲料的痕跡。')
        ,('以圓形麵包內夾絞肉的食物，定義上屬於三明治，現為公認的美式速食代表。\n餡料以漢堡排為主，並附夾上若干配料（以蔬菜和起司為主）和調味料。\n')
        ,('從橙的果肉榨出的果汁。\n其酸酸甜甜的味道，十分可口。\n有些柳橙汁含有果肉顆粒，又是另一種風味。\n在許多國家，柳橙汁通常是最常見的飲料之一，甚至經常出現在西式的早餐中，例如歐陸式早餐，可以跟蛋餅一起當早餐吃。')
        ,('常綠灌木或小喬木。\n枝上有刺；橢圓形葉，線形葉翼，嫩葉為紫紅色；花為白色帶紫，略有香味，單生或3～6朵成總狀花序；檸檬的果實為橢圓形柑果，黃色或紅色而有光澤，皮薄，果肉極酸。')
        ,('泛指所有源自義大利的麵食。\n在義大利，一般會用「Pasta」來稱呼各種由麵粉及水、有時或會加入雞蛋。\n狹義的義式麵體是由杜蘭麵粉所製，廣義則可包括由其他穀物為原料所製成的麵體。')
        ,('是一款義大利特色食物，其發源地是義大利的拿坡里，如今在全球頗受歡迎，披薩餅店分佈於世界各地。\n披薩餅的做法通常是以發酵過的圓麵餅皮上面覆蓋番茄醬、起司及其他配料，並由烤爐烤制而成。')
    ]
    /*放入圖片 */
    let img_content=document.getElementById("image_content");
    let img_pro=document.createElement("img");
    img_pro.src=product[id][3];
    img_pro.className+="product_img";
    img_content.appendChild(img_pro);
    /*商品名稱*/
    let title_div=document.getElementById("title_div");
    let title=document.createTextNode(product[id][0]);
    title_div.appendChild(title);
    /*商品內容 */
    let content=document.getElementById("con_s");
    let content_s=document.createTextNode(product[id][1]+"\n\n");
    let content_2=document.createTextNode(explain[id]);
    content.appendChild(content_s);
    content.appendChild(content_2);
    /*商品價格 */
    let price_div = document.getElementById("price");
    let price_con = document.createTextNode(product[id][2])
    price_div.appendChild(price_con);
    /*建立加入購物車img */
    let btn = document.getElementById('addcart');
    let pro_img = document.createElement("img");
    pro_img.src=product[id][3];
    pro_img.className+="pro_img";
    pro_img.setAttribute('id','img'+id)
    btn.appendChild(pro_img);
    /*購物車上數量 */
    let totals =0;
    for(i=0;i<10;i++) {
      let value= localStorage.getItem("product"+i);
      totals = Number(totals)+Number(value);
    }
    let all = document.getElementById('all_pro');
    all.textContent = totals;
  }


/*加入購物車及動畫 */
let action = true;
function addcart(){
  let id = localStorage.getItem("product_pages");
  counts = localStorage.getItem("product"+id);
  let ball = document.getElementById('img'+id)
  let bodyTop = document.documentElement.scrollTop;
  if(action ===true){
  action=false;
  if (counts>=15){
    counts=15
    localStorage.setItem("product"+id,15);
    let totals =0;
    for(i=0;i<10;i++) {
    let value= localStorage.getItem("product"+i);
    totals = Number(totals)+Number(value);
     }
     let all = document.getElementById('all_pro');
     all.textContent = totals;
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
      ball.style.width = '50vw';
      ball.style.height = '37.5vw';
      ball.style.transform="rotate(0deg)";
    counts++;
    localStorage.setItem("product"+id,counts);
  }
  let img = document.getElementById('image_content');
  ball.style.left = img.offsetLeft+'px';
  ball.style.top =  (img.offsetTop-bodyTop)+'px';
  setTimeout(()=>{
    let totals =0;
    for(i=0;i<10;i++) {
    let value= localStorage.getItem("product"+i);
    totals = Number(totals)+Number(value);
    }
    let all = document.getElementById('all_pro');
    all.textContent = totals;
    action=true;
  },400)
}else{
  return;
}
}

/*加入後跳轉購物車*/
  function cart(){
    let id = localStorage.getItem("product_pages");
    counts = localStorage.getItem("product"+id);
    if (counts>=15){
      counts=15
      localStorage.setItem("product"+id,15);
      alert("已達購物車一次購買數量最大上限");
    }else{
      counts++;
      localStorage.setItem("product"+id,counts);
    }
    location.href="cart.html";
  }
