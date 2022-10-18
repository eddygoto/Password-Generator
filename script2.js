if (specialConfirm && numberConfirm && lowerConfirm && upperConfirm) {
    for (var i = 0; i <= passwordLength; i++) {
    randomPassword += fullCharSet[Math.floor(Math.random() * fullCharSet.length)];
    }
  } else if (specialConfirm && numberConfirm && lowerConfirm) {
    for (var i = 0; i <= passwordLength; i++) {
      randomPassword += noUppers[Math.floor(Math.random() * noUppers.length)];
      }
  } else if (specialConfirm && numberConfirm) {
    for (var i = 0; i <= passwordLength; i++) {
      randomPassword += noUppers[Math.floor(Math.random() * noUppers.length)];
      }
  } else {
    for (var i = 0; i <= passwordLength; i++) {
      randomPassword += noUppers[Math.floor(Math.random() * noUppers.length)];
      }
  };