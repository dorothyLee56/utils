/**
 * 函数 `urlParamPass` 接受一个 URL 和一个参数名称数组，并将当前页面 URL 中的相应参数值附加到给定的 URL。
 * @param url - `url` 参数是一个字符串，表示您要通过向其附加查询参数来修改的 URL。
 * @param params - `params` 参数是一个可选的字符串数组。它表示您想要从当前 URL
 * 传递到“url”参数的查询参数。如果未提供“params”，则默认为空数组。
 * @returns 函数“urlParamPass”返回一个字符串。
 */
const urlParamPass = (url: string, params: string[] = []): string => {
  if (!url) return '';

  const urlObj = new URL(url);
  const locationUrlObj = new URL(location.href);

  params.forEach((key: string) => {
    const value: string | null = locationUrlObj.searchParams.get(key) || '';
    if (value) {
      urlObj.searchParams.append(key, value);
    }
  });

  return urlObj.toString();
};

export { urlParamPass }