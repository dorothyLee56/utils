'use strict';

/**
 * 加载脚本文件
 */
let index = 0;
const finishList = {};
/**
 * `loadScript` 函数用于从给定 URL 异步加载脚本，并返回一个在脚本完成加载时解析的 Promise。
 * @param url - `url` 参数是一个字符串，表示要加载的脚本的 URL。
 * @returns 函数“loadScript”返回一个 Promise。
 */
function loadScript(url) {
    if (!url)
        return Promise.reject('empty url');
    const result = finishList[url];
    if (result)
        return Promise.resolve(result);
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = `script${index++}`;
        script.src = url;
        script.async = true;
        if (script.src.indexOf('http') !== 0)
            throw Error(`load-script只能加载http/https协议的url，当前协议是${location.protocol}`);
        script.onerror = (e) => {
            // $(`#${script.id}`).remove();
            const scriptNode = document.getElementById(script.id);
            document.body.removeChild(scriptNode);
            reject(e);
        };
        if (script.readyState) {
            //IE
            script.onreadystatechange = (e) => {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    finishList[url] = e;
                    resolve(e);
                }
            };
        }
        else {
            script.onload = (e) => {
                finishList[url] = e;
                resolve(e);
            };
        }
        document.body.appendChild(script);
    });
}

exports.loadScript = loadScript;
