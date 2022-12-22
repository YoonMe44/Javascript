const search = () =>{
  const searchBox = document.getElementById("search-items").value.toUpperCase();
  const storedLists = document.getElementById("product-lists");
  const productitems = document.querySelectorAll(".product");
  const productName = document.getElementsByTagName("h2");

  for(let i = 0;i <productName.length;i++){
    const match = productitems[i].getElementsByTagName("h2")[0];
    console.log(match);
    if(match){
        let searchText = match.textContent || match.innerHTML
        if(searchText.toUpperCase().indexOf(searchBox) > -1){
            productitems[i].style.display = ""; 
        }else{
            productitems[i].style.display = "none";
        }
    }
  }
}