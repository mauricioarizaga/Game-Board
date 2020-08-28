const arr = [];
export function loadPlayer(payload) {
  arr.push(payload);
  localStorage.setItem("JugLeg", JSON.stringify(arr));
  return { type: "ADD_PLAYER", payload };
}
export function delPlayer(payload) {
  arr.splice(payload, 1);
  localStorage.setItem("JugLeg", JSON.stringify(arr));
  return { type: "DEL_PLAYER", payload };
}
export function addShoots(payload) {
  return { type: "ADD_SHOOT", payload };
}
export function events(payload) {
  return { type: "ADD_EVENTS", payload };
}
export function getEvents() {
  return { type: "GET_EVENTS" };
}
