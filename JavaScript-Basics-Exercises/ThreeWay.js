let compareByLength = (first, second) => {
  if (first.length > second.length) {
    return 1;
  } else if (first.length < second.length) {
    return -1;
  } else {
    return 0;
  }
}