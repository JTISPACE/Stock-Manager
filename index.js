
//Cart Tabs
function openCity(evt, cityName) {
  
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  
}
document.getElementById("defaultOpen").click();

//Cart Checkboxs
function cbChange(obj) {
    let cashBox = document.getElementById('cash-box');
    let checkmark = document.getElementsByClassName("cart-checkbox");
    for (var i = 0; i < checkmark.length; i++) {
        checkmark[i].checked = false;
        
    }
    obj.checked = true;

    console.log(obj.classList) ;

    if (obj.classList.contains('bank-transfer')){
      cashBox.style.display = "none";

    } else if (obj.classList.contains('card-payment')){
      cashBox.style.display = "none";

    } else {
      cashBox.style.display = "block";
    }


    
}

//Cash Received / Change
function cashInput(amount){
  // let cashReceived =  document.getElementById('cash-input').value;
  let total = document.getElementById('total-amount').innerHTML;
  let change =  document.getElementById('change');

  console.log(amount);

  let newCashReceived = parseFloat(amount.value);
  let newTotal = parseFloat(total);

  

  if (newCashReceived >= newTotal ){
    cashChange = newCashReceived - newTotal;
    change.innerHTML = cashChange;
    console.log(cashChange);

  } else if (newCashReceived < newTotal){
    change.innerHTML = "0";
  } else change.innerHTML = "";

};


//Cart Modal
(function(){
    const cartInfo = document.getElementById("cart-info");
    let cart = document.getElementById("cart");
    let modal = document.getElementById("cart-modal");
    
    
    let hideCart = document.getElementById('arrow');

    cartInfo.addEventListener("click", function() {
       modal.style.display = "block";
       cart.classList.remove('hide-cart');
       console.log(modal.classList);
    });

    hideCart.addEventListener("click",function(){
      modal.style.display = "none";
       
       console.log(modal.classList);
    });

    window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

})();

(function(){
  let quantityBtns = document.querySelectorAll('.qtyBtn');

  quantityBtns.forEach(function(qtyBtn){
              console.log(qtyBtn);
               qtyBtn.addEventListener("click", function(e){

                let quantity = e.target.offsetParent.children[1];
                
                console.log(quantity);
                
                

                // let count = e.target.parentElement.previousElementSibling.value;
                

              if(e.currentTarget.classList.contains('plus')){

               
                quantity.stepUp(1)
                console.log(quantity)
                 
              }

              if(e.currentTarget.classList.contains('minus')){

               
                quantity.stepDown(1)
                
                console.log(quantity.value)
                 
              }

              if(quantity.value <= 0 ){
                    quantity.value = 1
                }
            })

            })
           
           

})();

(function(){
    let cartItems  = document.getElementsByClassName('cart-items')
    let cartBtns = document.querySelectorAll('.cart-btn');

    cartBtns.forEach(function(btn){
        
        btn.addEventListener("click", function(e){

          document.querySelectorAll('.quantity').value = 1;

          console.log(e.target.parentElement.parentElement);

          if(e.target.parentElement.classList.contains('item-details')){

            let productName = e.target.parentElement.querySelector('p').textContent;
            let productPrice = e.target.parentElement.children[1].querySelector('p').textContent;
            let productQuantity = e.target.parentElement.parentElement.querySelector('.quantity').value;


            item = {};
            item.name = productName;
            item.price = parseFloat(productPrice);
            item.quantity = parseInt(productQuantity);

            console.log(item);

              const cartBody = document.getElementById('cart-tbody');
              let itemCount = cartBody.childElementCount + 1;
              document.getElementById('cart-qty').textContent = itemCount;

                let row_2 = document.createElement('tr');
                let row_2_data_1 = document.createElement('td');
                row_2_data_1.innerHTML = `${item.name}`;
                let row_2_data_2 = document.createElement('td');
                row_2_data_2.innerHTML = `x${item.quantity}`;
                let row_2_data_3 = document.createElement('td');
                row_2_data_3.classList.add('cart-item-price');
                row_2_data_3.innerHTML = `<span>&#8358;</span>${item.price*item.quantity}`;

                row_2.appendChild(row_2_data_1);
                row_2.appendChild(row_2_data_2);
                row_2.appendChild(row_2_data_3);
                cartBody.appendChild(row_2);

                // let priceCell = cartBody.firstChild.nextSibling.childNodes[2];
                // priceCell.classList.add('cart-item-price');
                // console.log(priceCell);
                            
         
            
            
           
        
            
            // cartItem.innerHTML = `<div><p>go</p></div>
                                    
                                  
                                  

            //                     `

             const cart = document.getElementById('cart');
             const total = document.querySelector('.total');
            
            //  cart.insertBefore(cartItem,total)

             alert('item added');
             showTotal();

          }
            
        })
    })

  function showTotal(){

    const total = [];
    const cartItemPrice = document.querySelectorAll('.cart-item-price');
    
    

    cartItemPrice.forEach(function(price){
      
      total.push(parseFloat(price.childNodes[1].textContent) );
      console.log(total);

    })

    const totalAmount = total.reduce(function(total,item){
      total += item
      return total;
    },0);

    console.log(totalAmount)

    document.getElementById('total-amount').innerHTML = totalAmount;

  }




})();
