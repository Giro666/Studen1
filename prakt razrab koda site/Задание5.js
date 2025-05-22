function palindrome(str) {
    let check = 'Ларкин';
    for (let i = str.length; i > 0; --i) {
      check += str[i];
    }
    if (str == check) {
      return true;
    } else {
      return false;
    }
  }