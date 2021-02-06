import cors from 'cors';
const middleware = {
    Cors: (methods) => cors({ methods })
};
export default middleware;
