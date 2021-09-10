import todoService from "../db/todoService.js";

const todoController = {

    getAll: async (req, res) => {
        const todos = await todoService.getAll();
        res.status(200).json(todos);
    },

    getOne: async (req, res) => {
        const id = parseInt(req.params.id);

        const task = await todoService.getById(id);

        if(task && task.length === 1) {
            res.status(200).json(task[0]);
        }
        else {
            res.sendStatus(404);
        }
    },

    insert: (req, res) => {
        res.sendStatus(501);
    },

    update: (req, res) => {
        res.sendStatus(501);
    },

    delete: (req, res) => {
        res.sendStatus(501);
    }
}

export default todoController;