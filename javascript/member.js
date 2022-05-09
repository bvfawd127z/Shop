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

  
