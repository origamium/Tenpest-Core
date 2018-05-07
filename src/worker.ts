import Store from './Store';
const s = new Store();

onmessage = function(e) {
    s.messageHandler(e);
};
