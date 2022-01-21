function objectParser(object) {
  return Object.keys(object)
    .map(key => {
      return {
        id: key,
        ...object[key],
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}

export default objectParser;
