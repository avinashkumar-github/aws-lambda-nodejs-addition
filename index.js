exports.handler = async (event) => {
  console.log("Event " + event);
  return await addition(event);
};

const addition = async ({ a, b }) => {
  return a + b;
};
