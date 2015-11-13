function getMessage(a, b) {
  if (typeof a == 'boolean') {
    if (a == true) {
      var str = "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
      return str;
    } else {
      return "Переданное GIF-изображение не анимировано";
    }
  } else if (typeof a == "number") {
    var str = "Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + "аттрибутов";
    return str;
  } else if ((typeof a == "object") && (a instanceof Array) && !Array.isArray(b))  {
    var arrSum = 0;
    for (var i = 0; i < a.length; i++) {
      arrSum = arrSum + a[i];
    }
    var str = "Количество красных точек во всех строчках изображения: " + arrSum;
    return str;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    var square = 0;
    for (var i = 0; i < a.length; i++) {
      square = square + a[i] * b[i];
    }
    var str = "Общая площадь артефактов сжатия: " + square + " пикселей";
    return str;
  }
}
