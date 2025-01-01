import { describe, expect, test } from "vitest";
import { format } from "src";

// 0123456789  ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz   Normal
// 𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗  𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙  𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳   Bold
// 0123456789  𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍  𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧   italic

describe("Bold formatting", () => {
  test("Format Uppercase to bold", () => {
    const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    expect(format("bold", text)).toBe("𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙");
  });

  test("Format lowercase to bold", () => {
    const text = "abcdefghijklmnopqrstuvwxyz";
    expect(format("bold", text)).toBe("𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳");
  });

  test("Format numbers to bold", () => {
    const text = "0123456789";
    expect(format("bold", text)).toBe("𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗");
  });
});

describe("Italic formatting", () => {
  test("Format Uppercase to italic", () => {
    const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    expect(format("italic", text)).toBe("𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍");
  });

  test("Format lowercase to italic", () => {
    const text = "abcdefghijklmnopqrstuvwxyz";
    expect(format("italic", text)).toBe("𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧");
  });

  test("Format numbers to italic", () => {
    const text = "0123456789";
    expect(format("italic", text)).toBe("0123456789");
  });
});
