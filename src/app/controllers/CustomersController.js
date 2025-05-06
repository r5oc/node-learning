let customers = [
    { id: 1, name: "ex1", site: "https://example.com/" },
    { id: 2, name: "ex2", site: "https://example.com/" },
    { id: 3, name: "ex3", site: "https://example.com/" }
];

class CustomersController {

    index(req, res) {
        return res.json(customers);
    }

    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }

    showQuery(req, res) {
        const { id, name, site } = req.query;
        const customer = customers.find(item => item.id === parseInt(id) || item.name === name || item.site === site);
        const status = customer ? 200 : 404;
        return res.status(status).json(customer);
    }

    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;
        const newCustomer = { id, name, site };
        const status = newCustomer ? 201 : 404;
        return res.status(status).json(newCustomer);
    }

    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id, name, site };
        };

        return res.status(status).json(customers[index]);
    }

    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers.splice(index, 1);
        }

        return res.status(status).json({deleted_id: id});
    }
}

export default new CustomersController();