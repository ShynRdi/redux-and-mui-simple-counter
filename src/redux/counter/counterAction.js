const increase = (value = 1) => {
  return { type: "INCREASE_COUNTER", payloud: value };
};
// export default increase;

const decrease = (value = 1) => {
  return { type: "DECREASE_COUNTER", payloud: value };
};
export { increase, decrease };
