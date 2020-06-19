let products = [];

const list = (req, res) => {
    res.json(products);
}

const update = (req, res) => {
    let findProduct = products.find(product => product.name === req.body.name);
        
       if (findProduct === undefined) {
     res.status(404).send;
       return;
    }
    
    findProduct.nombre = req.body.nombre,
    findProduct.stock = req.body.stock,
    findProduct.precio = req.body.precio
    
    res.send()
};

const add = (req, res) => {
    // TODO: validar los valores recibidos

    products.push({
        name: req.body.name,
        stock: req.body.stock,
        precio: req.body.precio
    })

    res.send();
}

module.exports = {
    update,
    add,
    list
}
