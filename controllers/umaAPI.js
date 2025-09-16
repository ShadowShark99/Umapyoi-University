exports.fetchUmaIds = async () => {
  const get = `https://umapyoi.net/api/v1/character`;
  const response = await fetch(get);
  const result = await response.json();
  return result;
};

//example id: (1002, 4536), (1003, 4550), (1001m 4737)
exports.fetchUma = async (id) => {
    const get = `https://umapyoi.net/api/v1/character/${id}`;
    const response = await fetch(get);
    const result = await response.json();
    return result;
};