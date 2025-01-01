# UniFont

A lightweight TypeScript library for converting text into various Unicode font styles. Supports multiple font styles like bold, italic, monospace, and more. Perfect for customizing text for social media, terminals, or any other Unicode-compatible platform.

## Features

- Convert text into multiple Unicode font styles.

- Handle fallback for missing characters with customizable mappings.

- Lightweight and easy to integrate.

- Written in TypeScript for strong typing and better developer experience.

## Usage

### Basic Example

```js
import { format } from "@omar/unifont";

const text = "Hello World";

console.log(format("bold", text)); // Output: 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝
console.log(format("italic", text)); // Output: 𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑
console.log(format("underline", text)); // Output: 𝙷̲𝚎̲𝚕̲𝚕̲𝚘̲ ̲𝚠̲𝚘̲𝚛̲𝚕̲𝚍̲
```

### Supported Styles 

**Currently Supported:**

- `bold`

- `italic`

- `underline` (via combining Unicode characters)

**Planned Styles:**

- `boldItalic`

- `script`

- `monospace`

- `strikethrough`

- `double-struck`

- `small-caps`

- `fraktur`

## Development

### Scripts

- `pnpm dev:` Start the project in development mode.

- `pnpm watch:` Compile the project in watch mode

- `pnpm build:` Build the project for production.

- `pnpm start:` Run the production build.

- `pnpm test:` Run tests.

- `pnpm clean:` Remove the build directory.

### Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
