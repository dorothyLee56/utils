/**
 * 加载脚本文件
 */
/**
 * `loadScript` 函数用于从给定 URL 异步加载脚本，并返回一个在脚本完成加载时解析的 Promise。
 * @param {string} url - `url` 参数是一个字符串，表示要加载的脚本的 URL。
 * @returns 函数“loadScript”返回一个 Promise。
 */
declare function loadScript(url: string): Promise<any>;

export { loadScript };
