/**
 * 加载css文件
 */
let index = 0;
const finishList = {};
/**
 * `loadCss` 函数用于从给定的 URL 动态加载 CSS 文件，并返回一个 Promise，该 Promise 在 CSS 文件成功加载时解析，如果出现错误则拒绝。
 * @param {string} url - `url` 参数是一个字符串，表示要加载的 CSS 文件的 URL。
 * @returns 函数“loadCss”返回一个 Promise。
 */
function loadCss(url) {
    if (!url)
        return Promise.reject('empty url');
    const result = finishList[url];
    if (result)
        return Promise.resolve(result);
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.id = `link${index++}`;
        link.setAttribute('href', url);
        link.setAttribute('charset', 'utf-8');
        if (link.href.indexOf('http') !== 0)
            throw Error(`load-css只能加载http/https协议的url，当前协议是${location.protocol}`);
        link.onload = (e) => {
            finishList[url] = e;
            resolve(e);
        };
        link.onerror = (e) => {
            //  $(`#${link.id}`).remove();
            const linkNode = document.getElementById(link.id);
            document.body.removeChild(linkNode);
            reject(e);
        };
        document.body.appendChild(link);
    });
}

export { loadCss };
