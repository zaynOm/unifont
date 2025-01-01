type Styles = "bold" | "italic" | "underline";

const fonts = {
  bold: { upper: 119743, lower: 119737, number: 120734 },
  italic: { upper: 119795, lower: 119789, number: null },
  underline: { upper: 119743, lower: 119737, number: null },
};

function format(style: Styles, text: string) {
  let res = [];
  for (const c of text) {
    const code = c.charCodeAt(0);
    if (/[A-Z]/.test(c)) {
      res.push(code + fonts[style].upper);
    } else if (/[a-z]/.test(c)) {
      res.push(code + fonts[style].lower);
    } else if (fonts[style].number && /[0-9]/.test(c))
      res.push(code + fonts[style].number);
    else res.push(code);
  }

  return String.fromCodePoint(...res);
}
