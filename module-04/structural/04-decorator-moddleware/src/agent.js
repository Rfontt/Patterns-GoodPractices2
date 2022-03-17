import Http from 'http';

async function injectHttpInterceptor() {
    const oldEmit = Http.Server.prototype.emit;

    Http.Server.prototype.emit = function (...args) {
        const [type, req, response] = args;

        if(type === "request") {
            response.setHeader('X-Instrumented-By', 'Rfontt');
        }

        return oldEmit.apply(this, args)
    }
}

export { injectHttpInterceptor }