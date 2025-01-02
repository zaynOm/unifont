type Styles = "bold" | "italic" | "monospace" | "underline";

type UnicodeCharMap = {
  upper: number;
  lower: number;
  number: number | null;
};

type Font = Record<Styles, UnicodeCharMap | number>;

const fonts: Font = {
  bold: { upper: 119743, lower: 119737, number: 120734 },
  italic: { upper: 119795, lower: 119789, number: null },
  monospace: { upper: 120367, lower: 120361, number: 120774 },
  underline: 818,
};

const missingChars: Partial<Record<Styles, Record<string, string>>> = {
  italic: { h: "ℎ" },
};

export function format(style: Styles, text: string) {
  let res = [];
  for (const c of text) {
    const code = c.charCodeAt(0);
    if (missingChars[style]?.[c]) {
      res.push(missingChars[style][c].codePointAt(0)!);
    } else if (/[A-Z]/.test(c)) {
      res.push(code + fonts[style].upper);
    } else if (/[a-z]/.test(c)) {
      res.push(code + fonts[style].lower);
    } else if (fonts[style].number && /[0-9]/.test(c))
      res.push(code + fonts[style].number);
    else res.push(code);
  }

  return String.fromCodePoint(...res);
}

function underline(text: string) {
  // convert the text to monospace first to get a nice connected underline
  const monotext = format("monospace", text);
  let res = [];
  for (const char of monotext) {
    const codePoints = [...char];
    res.push(...codePoints.map((cp) => cp.codePointAt(0)!));
    res.push(+fonts.underline);
  }

  return String.fromCodePoint(...res);
}
