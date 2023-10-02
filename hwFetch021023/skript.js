let url = "https://dummyjson.com/products"

const rootDiv = document.querySelector('#root');
// rootDiv.innerHTML = 'Hallo'

fetch(url)
    .then(resp => resp.json())
    .then(arr => renderCard(arr))  

function renderCard(arr) {
    
    arr.products.forEach(element => {
        //  Создание контейнера для элементов
       const cardEl = document.createElement('div')
       const imgEl = document.createElement('img')
       const titleEl = document.createElement('p')
       const priceEl = document.createElement('span')
       const description = document.createElement('div')
       const ratingContainer = document.createElement('div')
       const addToCartBtn = document.createElement('button')

       cardEl.classList.add('card')
       description.classList.add('shortDescr')
       // Наполнение контейнеров элементами
       imgEl.src = element.images[0]
       titleEl.innerHTML = '<b>Title: </b>'+element.title
       priceEl.innerHTML  = '<b>Price: </b>'+element.price +'$'
       description.innerText = element.description
       addToCartBtn.innerText = 'Add to cart'
       
       addToCartBtn.addEventListener('click', ()=>{
        let cart  = (JSON.parse(localStorage.getItem('cart'))) ?? []
        cart.push(element)
         localStorage.setItem('cart', JSON.stringify(cart))
      })
   
       
       // Добавление карточки к главному контейнеру на сайте
       rootDiv.append(cardEl)
       // добавление контейнеров элементов к карточке
       cardEl.append(imgEl, titleEl, priceEl, description)
       ratingContainer.innerText = renderRating(element.rating, cardEl)
       cardEl.append(addToCartBtn)
       
        // rootDiv.innerHTML += element.id
    });
}

function renderRating(rating, cardEl) {
    const rat = Math.round(rating)
    const ratingCont = document.createElement('div');
    for (let i = 0; i < 5; i++) {
        // console.log(rat);
        ratingCont.innerHTML  +=  (i<rat) ? '<span class="fa fa-star activ"></span>' : '<span class="fa fa-star"></span>'
        
    }
    ratingCont.classList.add('rating')
    cardEl.append(ratingCont)
   
}
function getLocalstorage(key){

}
function setLocalStorage(key, arr) {

}
function addToCart(product){ 

}
