import http from 'http';
import { injectHttpInterceptor } from '../index.js';

injectHttpInterceptor();

// curl -i localhost:3000 -> run the route

function handleRequest(request, response) {
    // response.setHeader('X-Instrumented-By', 'Rfontt');
    response.end('Hello world!');
}

const server = http.createServer(handleRequest);
const port = 3000;

server.listen(port, () => console.log('Server running at', `http://localhost:${port}`));