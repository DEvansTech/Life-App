// actions/counter_actions.js
const increment_counter = () => {
  return {
    type: "increment"
  }
}
const decrement_counter = () => {
  return {
    type: "decrement"
  }
}
export { increment_counter, decrement_counter };