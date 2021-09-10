import todoController from "../controllers/todoController.js";

export default (router) => {

    router.route('/todo')
        .get(todoController.getAll)
        .post(todoController.insert);

    router.route('/todo/:id[0-9]+')
        .get(todoController.getOne)
        .put(todoController.update)
        .delete(todoController.delete);
    
}