let lista = [];

function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response => {
        categorias.innerHTML += `<option>Todos</option>`;
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
        
        lista = response;
        renderList(response);
        
    } catch (error) {
        alert("produtos não entrados :/");
    }
}
getProducts();

function orderingBy(){
    if(ordenacao.value == 1){
        renderList(lista.toSorted((a, b) => a.price - b.price))
    }else{
        renderList(lista.toSorted((a, b) => b.rating.rate - a.rating.rate))
    }
    // alert("ta funfando" + ordenacao.value)
}

function filteredBy(){
    if(categorias.value === 'Todos'){
        renderList(lista)
    }else{
        renderList(lista.filter((item) => item.category == categorias.value))
    }

    // renderList(lista.toSorted((a, b) => ordenacao.value == 1 ? a.price - b.price))
}

function renderList(arr){
    produtos.innerHTML = '';
    arr.map(produto => {
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
}