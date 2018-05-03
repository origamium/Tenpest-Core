import Store from './Store';
let s = new Store();

onmessage = function(e) {
    s.messageHandler(e);
};
