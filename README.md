# fdir-size |⚡ Fastest Directory Size Calculator at Sub-second!

<a href="https://www.buymeacoffee.com/tbroz15" target="_blank"><img src="https://img.shields.io/badge/-buy_me_a_coffee!-gray?logo=buy-me-a-coffee" alt="Buy Me A Coffee" />
<a href="https://www.npmjs.com/package/fdir-size">
<img alt="NPM Downloads" src="https://img.shields.io/npm/d18m/fdir-size?color=dodgerblue&logoColor=white"/>
<img alt="NPM Version" src="https://img.shields.io/npm/v/fdir-size?">
</a></h3>

⚡ **The Fastest**\*: Can **sum ~100k file sizes in a second!**

🤏 **Microscopic Small**: No bin files, just pure ol' Javascript. The source code itself is **minified to only 0.4 KB**!

📦 **Just One Package**: `fdir-size` uses it's one and only spine, `fdir`!

🍋 **[Easy Peasy](https://i.kym-cdn.com/photos/images/original/002/581/449/5a9)**: Just one function will do!

\*_The fastest in NodeJS, some other programming languages can top that! [Please check out the benchmark page for more](https://github.com/TBroz15/fdir-size/wiki/Benchmarking)._

#### Please support the creator of `fdir`, [@thecoddr](https://github.com/thecodrr) for making this project possible!

## Usage

### Prerequisites

- NodeJS Current LTS 14 or above
- Any JS package manager

```typescript
import getDirSize from "fdir-size";

const MB = 1000 * 1000;

// This sample directory has 100 files that has 1 MB each.
const dir = "./../my_directory";

const size = await getDirSize(dir);

// Console Output:
//   "./../my_directory" stores 100 MB.
console.log(`"${dir}" stores ${size / MB} MB.`);
```

## [Wiki](https://github.com/TBroz15/fdir-size/wiki)

For usages, benchmarks, and tips, please check out the [wiki page](https://github.com/TBroz15/fdir-size/wiki)!
