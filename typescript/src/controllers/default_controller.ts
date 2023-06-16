import { Controller, defaultWorker, viewResult, assign } from "fortjs";

export class DefaultController extends Controller {

    @defaultWorker()
    async index(@assign('FortJs') title: string) {
        const data = {
            title: title
        };
        const result = await viewResult('../views/default/index.html', data);
        return result;
    }
}