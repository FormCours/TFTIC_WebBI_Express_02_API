import demoController from '../controllers/demoController.js';

export default (router) => {

    router.route('/demo')
        .get(demoController.getAll)
        .post(demoController.add);

    router.route('/demo/:id')
        .get(demoController.getOne)
        .put(demoController.update)
        .delete(demoController.deleteOne);
};