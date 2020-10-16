export function exportSymbol(
  path: string,
  fallback: object | null,
  global: any
) {
  const parts = path.split(".");
  parts[0] in global ||
    "undefined" == typeof global.execScript ||
    global.execScript("var " + parts[0]);

  for (let part: string; parts.length && (part = parts.shift()); ) {
    if (!parts.length && isDef(fallback)) {
      global[part] = fallback;
      continue;
    }

    if (global[part] && global[part] !== Object.prototype[part]) {
      global = global[part];
    } else {
      global[part] = {};
    }
  }
}

export function inherits(a: any, b: any) {
  function c() {}
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.base = function (a: any, c: any) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
      d[e - 2] = arguments[e];
    return b.prototype[c].apply(a, d);
  };
}

export function isDef(thing: any) {
  return void 0 !== thing;
}
