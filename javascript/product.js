/*跳頁*/
function page(page){
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
    let create=document.getElementById("product_create");
    let number=product.length;
    for(number=0;number<10;number++){
        let img_pro=document.createElement("img");
        img_pro.src=product[number][3];
        img_pro.className+="product_img";
        create.appendChild(img_pro);
    }
}
