function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response => {
        for(let i = 0; i < response.length; i++){
            categorias.innerHTML += `<option>${response[i]}</option>`;
        }
        // response.map(r => {
        //     categorias.innerHTML += `<option>${r}</option>`;
        // })
    })
} getCategories();

async function getProducts(){
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        produtos.innerHTML = ''
        if(response.length > 0){
            response.map(produto => {
                produtos.innerHTML += `
                <li class="card">
                <div class="card-imagem">
                    <img src="${produto.image}" alt="">
                    <div class="card-nota">${produto.rating.rate}</div>
                </div>
                <div class="card-info">
                    <h3>${produto.title}</h3>
                    <h6>${produto.category}</h6>
                    <h4>$ ${produto.price}</h4>
                </div>
            </li>
                `;
        })
        return;
        }
        
    } catch (error) {
        alert("produtos não entrados :/");
    }
}
getProducts();