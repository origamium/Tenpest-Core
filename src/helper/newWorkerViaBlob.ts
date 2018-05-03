export default (relativePath: string): Worker => {
    const baseURL = window.location.href
        .replace(/\\/g, '/')
        .replace(/\/[^\/]*$/, '/');
    const array = ['importScripts("' + baseURL + relativePath + '");'];
    const blob = new Blob(array, {type: 'text/javascript'});
    const url = window.URL.createObjectURL(blob);
    return new Worker(url);
};
