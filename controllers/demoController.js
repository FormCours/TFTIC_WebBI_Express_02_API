const people = [
    {id: 1, firstname: 'Zaza', lastname: 'Vanderquack'},
    {id: 2, firstname: 'Riri', lastname: 'Duck'}
];

export const getAll = (req, res) => {
    res.status(200).json(people);
};

export const add = (req, res) => {
    // Note : Il faut vérifier les donnes avant de les ajouter ;)
    const nextId = Math.max(...people.map(p => p.id)) + 1;
    people.push({id: nextId, ...req.body});

    res.status(200).json({id: nextId});
}

export const getOne = (req, res) => {
    const id = parseInt(req.params.id);   //Route -> /demo/:id
    const data = people.find(p => p.id === id);

    if(data) {
        res.status(200).json(data);
    }
    else {
        res.sendStatus(404);
    }
}

export const update = (req, res) => {
    res.sendStatus(501);
}

export const deleteOne = (req, res) => {
    res.sendStatus(501);
}

export default {
    getAll,
    getOne,
    add,
    update,
    deleteOne
}