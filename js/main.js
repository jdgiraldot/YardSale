const hamburgerIcon = document.querySelector('#hamburger-icon')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCartIcon = document.querySelector('#shopping-cart-icon')
const shoppingCartMenu = document.querySelector('.shopping-cart-menu')

hamburgerIcon.addEventListener('click', toggleElement)
shoppingCartIcon.addEventListener('click', toggleElement)

function toggleElement(e){

switch (e.target){
        case hamburgerIcon: // Sí presionaron el icono hamburguesa se cambia el estado del menú desplegable en la versión mobile.
            mobileMenu.classList.toggle('active-left')
            shoppingCartMenu.classList.remove('active-right')
            break;
        case shoppingCartIcon:
            shoppingCartMenu.classList.toggle('active-right')
            mobileMenu.classList.remove('active-left')
            break;
    }
}

// --------------------- Lista de productos --------------------- 

const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({  // Ingresando la base de datos de la lista de productos
    id: 1,
    name: 'Pokemón figure',
    price: 120,
    image: 'https://boomshock.co/cdn/shop/products/pokemon-select-action-figure-zapdos-15-cm.jpg?v=1663020989&width=1445',
    isAddToCart: false
},{
    id: 2,
    name: 'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    isAddToCart: false
},{
    id: 3,
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    isAddToCart: false
},{
    id: 4,
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    isAddToCart: false
},{
    id: 5,
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    isAddToCart: false
},{
    id: 6,
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    isAddToCart: false
},{
    id: 7,
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    isAddToCart: false
},{
    id: 8,
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    isAddToCart: false
},{
    id: 9,
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    isAddToCart: false
},{
    id: 10,
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    isAddToCart: false
});


productList.map(function (product){  // Creando elementos HTML para la lista de productos
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.classList.add('product-img')
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');  

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.classList.add('add-cart-icon');
  productImgCart.setAttribute('src', './images/icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
});


// --------------------- Añadir items al Carrito de compras ---------------------

const cartList = document.querySelector('.cart-list')
const addCartIcons = document.querySelectorAll('.add-cart-icon')

const shoppingCartList = []

function renderShoppingCart (array) {   // Crea los elementos HTML para cada item en el carrito de compras

    cartList.innerText = ''     // Borra los items que hayan en el carrito de compras
    
    for (product of array) {

        const cartItem = document.createElement('li');
  
        const cartItemImg = document.createElement('img');
        cartItemImg.setAttribute('src', product.image);
    
        // const removeCartItem = document.createElement('b');
        // removeCartItem.classList.add('remove-cart-icon');
        // removeCartItem.innerText = 'X'

        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;

        const inputCant = document.createElement('input')
        inputCant.setAttribute('type','number')
        inputCant.setAttribute('min','1')
        inputCant.setAttribute('max','100')
        inputCant.setAttribute('value','1')

        const inputLabel = document.createElement('label')
        inputLabel.innerText = 'Cantidad: '
        inputLabel.appendChild(inputCant)

        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(inputLabel)
        productInfoDiv.appendChild(productName)
        
        cartItem.appendChild(cartItemImg)
        // cartItem.appendChild(removeCartItem)
        cartItem.appendChild(productInfoDiv)

        cartList.appendChild(cartItem);
    }
}

addCartIcons.forEach((addCartIcon, index) => {
    addCartIcon.addEventListener('click', () => {

        if (!productList[index].isAddToCart) {

            productList[index].isAddToCart = true
            addCartIcon.setAttribute('src','./images/icons/bt_added_to_cart.svg')
            shoppingCartList.push(productList[index])
            renderShoppingCart(shoppingCartList)

        } else {
            
            productList[index].isAddToCart = false
            addCartIcon.setAttribute('src','./images/icons/bt_add_to_cart.svg')
            shoppingCartList.splice(shoppingCartList.findIndex((objeto) => objeto.id == productList[index].id),1)
            renderShoppingCart(shoppingCartList)
        }
    })
})
