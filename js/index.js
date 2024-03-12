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
    const request = await fetch('https://fakestoreapi.com/products');
    const response = await request.json();
    if(response.length > 0){
        response.map(produto => {
            produtos.innerHTML += `<li>${produto.title}</li>`;
        })
        return;
    }

    alert("produtos não entrados :/");
} getProducts();