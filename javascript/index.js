/*文字顏色*/
function food_content(x){
    document.getElementsByClassName(x)[0].style.display="block";
}
function food_content_L(x){
    document.getElementsByClassName(x)[0].style.display="none";
}
/*跳頁*/
function page(page){
    location.href=page;
}
/*幻燈片廣告*/
let imgsrc = document.getElementById('slideshow');
const imgar =["product/product4.jpg","product/product5.jpg","product/product6.jpg"]
let img = 0;
window.onload=function(){
  function show(){
  img++;
  if(img>imgar.length-1)
  {
    img=0;
  }
  document.getElementsByClassName('load')[0].style.display="none";
  imgsrc.src=imgar[img];
  }
  setInterval(show,2000);
}
/*幻燈片廣告向左*/
function show_L(){
  img--;
  if(img<0)
  {
    img=2;
  }
  document.getElementsByClassName('load')[0].style.display="none";
  imgsrc.src=imgar[img];
  }
/*幻燈片廣告向右*/
function show_R(){
  img++;
  if(img>imgar.length-1)
  {
    img=0;
  }
  document.getElementsByClassName('load')[0].style.display="none";
  imgsrc.src=imgar[img];
  }
  /*跳頁及儲存跳頁資料 */
  function storage(page){
    let search = document.getElementById("search_block").value;
    localStorage.setItem("search",search);
    location.href=page;
  }
 

  /*呼叫商品頁面 */
  function product_pages(product){
    localStorage.setItem("product_pages",product);
    location.href="product_pages.html";
  }