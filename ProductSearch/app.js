const search = () =>{
  const searchBox = document.getElementById("search-items").value.toLowerCase();
  // const storedLists = document.getElementById("product-lists");
  const productitems = document.querySelectorAll(".product");
  const productName = document.getElementsByTagName("h2");

  for(let i = 0;i < productName.length;i++){
    const match = productitems[i].getElementsByTagName("h2")[0];
    console.log(match);
    if(match){
        let searchText = match.textContent || match.innerHTML
        if(searchText.toLowerCase().indexOf(searchBox) >= 0){
          console.log(true);
            productitems[i].style.display = ""; 
        }else{
          console.log(false);
            productitems[i].style.display = "none";
        }
    }
  }
}