export default function shapeFour() {
  var num = Math.floor(Math.random() * (7) ) + 1;
  if (num===1) {
    return 'Line';
  }
  else if (num===2) {
    return 'Square';
  }
  else if (num===3) {
    return "Tee";
  }
  else if (num===4) {
    return "Ell";
  }
  else if (num===5) {
    return "Lee";
  }
  else if (num===6) {
    return "Ess";
  }
  else if (num===7) {
    return "Zee";
  }
}
