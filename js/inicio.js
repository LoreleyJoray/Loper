let mensaje = prompt("¿Estás en una situación urgente y NO PODES HABLAR? Dejanos tu nombre y contacto de alguien confiable para vos!")

if (mensaje == "" || mensaje == null) {
    alert("Esperamos que nuestra Web te ayude en tu búsqueda de información!");
} else {
    alert("Gracias, pronto nos pondremos en contacto con la información que proporcionaste: "+mensaje+"!")
}
const fetchData = (product, quantity) => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
            .then((response) => response.json())
            .then((data) => {
                const availableProducts = data.results;
                let products;
    
                if (availableProducts.length > 0) {
                    products = availableProducts.map((element) => {
                        return {
                            id: element.id,
                            title: element.title,
                            price: element.price,
                            currency_id: element.currency_id,
                            available_quantity: element.available_quantity,
                            thumbnail: element.thumbnail.replace('http://', 'https://'),
                            condition: element.condition,
                            permalink: element.permalink
                        };
                    });
                }
    
                imprimirInfo(products, quantity);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    const imprimirInfo = (info, quantity) => {
        const aside = document.getElementById('publicity');
    
        for (let i = 0; i < quantity; i++) {
            const cardProduct = document.createElement('article');
            cardProduct.innerHTML = `
                <img src="${info[i].thumbnail}" alt="${info[i].title}"/>
                <h2>${info[i].title}</h2>
                <p>$${info[i].price}</p>
                <a href="${info[i].permalink}" target="_blank">Comprar</a>
            `;
            cardProduct.className = 'product';
            cardProduct.id = `product-${i}`;
            aside.appendChild(cardProduct);
        }
    };
    
    window.addEventListener('load', function(event) {
        fetchData('defensa personal', 5);
    });

// console.log(mensaje)
