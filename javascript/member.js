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
/*顯示密碼*/
function myFunction() {
    var x = document.getElementById("pass_type");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  window.onload = function(){
    /*購物車上數量 */
    let totals =0;
    for(i=0;i<10;i++) {
    let value= localStorage.getItem("product"+i);
    totals = Number(totals)+Number(value);
     }
     let all = document.getElementById('all_pro');
     all.textContent = totals;
}
  
