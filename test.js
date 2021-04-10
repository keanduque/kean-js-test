/**TEST triangles Square */
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br />");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("*");
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br />");
}

for (let x = 1; x <= 5; x++) {
  for (let y = 5; y >= x; y--) {
    document.write("&nbsp;&nbsp;");
    if (y == x) {
      for (let z = 1; z <= y; z++) {
        document.write("*");
        document.write("&nbsp;&nbsp;&nbsp;");
      }
    }
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br />");
}

for (let x = 1; x <= 5; x++) {
  for (let y = 1; y <= 5; y++) {
    document.write("&nbsp;&nbsp;");
    if (y === x) {
      for (let z = 5; z >= y; z--) {
        document.write("*");
        document.write("&nbsp;&nbsp;&nbsp;");
      }
    }
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br />");
}
for (let x = 5; x >= 1; x--) {
  for (let y = 1; y <= 5; y++) {
    document.write("*");
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br />");
}
