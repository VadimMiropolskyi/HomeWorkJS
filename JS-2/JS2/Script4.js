//прямоугольник
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 27; j++) {
      document.write("$");
    }
  
    document.write("<br/>");
  }
  
  document.write("<br/>");
  document.write("<br/>");
  
  // прямоугольный треугольник
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
      document.write("$");
    }
  
    document.write("<br/>");
  }
  
  document.write("<br/>");
  document.write("<br/>");
  
  // треугольник равносторонный пирамида
  let n = "&nbsp";
  for (let i = 0; i < 8; i++) {
    for (let k = 8; k > i - 1; k--) {
      document.write(n, n);
    }
    for (let j = 0; j < i + 1; j++) {
      document.write("$", n, n);
    }
    document.write("<br>");
  }
  
  document.write("<br>");
  document.write("<br>");
  
  // ромб
  let space = 8;
  let star = 1;
  let line = 10;
  for (let i = 0; i <= line; i++) {
    for (let j = 0; j <= space; j++) {
      document.write("&nbsp");
    }
    for (let k = 0; k < star; k++) {
      document.write("$");
    }
    space--;
    star++;
    if (i >= line / 2 && i <= line) {
      star = star - 2;
      space = space + 2;
    }
    document.write("<br>");
  }
  