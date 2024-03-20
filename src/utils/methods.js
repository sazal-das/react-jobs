export const objectToApiQuaryString = (obj = {}) => {
  const _obj = JSON.parse(JSON.stringify(obj));
  Object.keys(_obj).forEach(
    (k) => (_obj[k] == null || _obj[k] === "") && delete _obj[k]
  );
  const string = Object.keys(_obj)
    .map(function (key) {
      if (typeof _obj[key] === "object") _obj[key] = JSON.stringify(_obj[key]);
      const value = _obj[key];

      return key + "=" + value;
    })
    .join("&");
  return string ? `?${string}` : "";
};
