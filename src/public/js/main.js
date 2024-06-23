const socket = io()

socket.on("products", (data) => {
    renderProducts(data);
});

const renderProducts = (data) => {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML ="";

    data.forEach(item => {
        const card = document.createElement("div");

        card.innerHTML = `<p>${item.id}</p>
        <p>${item.title}</p>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <p>${item.category}</p>
        <p>${item.stock}</p>
        <p>${item.code}</p>
        <p>${item.thumbnail}</p>
        <p>${item.status}</p>
        <button> Eliminar </button>`

        productsContainer.appendChild(card);

        card.querySelector("button").addEventListener("click", () => {
            deleteProducts(item.id);
        })
    })

}

const deleteProducts = (id) => {
    socket.emit("deleteProducts", id);
}



document.getElementById("btnSend").addEventListener("click", () => {
    newProduct();
})


const newProduct = () => {
    const product = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        thumbnails: document.getElementById("thumbnails").value,
        code: document.getElementById("code").value,
        stock: document.getElementById("stock").value,
        category: document.getElementById("category").value,
        status: document.getElementById("status").value === "true",
    }

    socket.emit("newProduct", product);
}