import { Controller, defaultWorker, textResult, viewResult, assign } from "fortjs";

export class DefaultController extends Controller {

    @defaultWorker()
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }
}