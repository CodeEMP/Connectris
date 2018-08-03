export default function shapeFour() {
  var num = Math.floor(Math.random() * (3) ) + 1;
  if (num===1) {
    return 'Line';
  }
  else if (num===2) {
    return 'Square';
  }
  else if (num===3) {
    return "Tee";
  }
}
