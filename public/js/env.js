const SERVER_PORT = process.env.SERVER_PORT || 8080;
const WEBSOCKET_URL = `ws://localhost:${SERVER_PORT}`;

export { SERVER_PORT, WEBSOCKET_URL };
