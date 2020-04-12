import { Container } from 'typedi';

export default ({ mongoConnection, models }: { mongoConnection, models: Array<{name: string, model: any}> }) => {
    try {
        models.forEach(m => {
            Container.set(m.name, m.model);
        });
        Container.set('mongoConnection', mongoConnection);
    } catch(error) {
        console.error(error);
    }
}