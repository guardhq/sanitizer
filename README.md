# @guardhq/sanitizer
**Tiny text sanitizer that's really just a bunch of libraries in a trenchcoat.**

<div>
  <img src="https://readmebadges.netlify.app/badges/made-with-ts.svg" alt="Made with TypeScript" />
  <img src="https://readmebadges.netlify.app/badges/made-with-love.svg" alt="Made with love" />
</div>


## 📦 Installation
```bash
$ npm install @guardhq/sanitizer # via npm
$ yarn add @guardhq/sanitizer    # via yarn
$ pnpm add @guardhq/sanitizer    # via pnpm
```

## 🪴 Usage
```ts
import sanitizer from '@guardhq/sanitizer';

sanitizer('aéà)àçé');
// 'aea)ace'

sanitizer(someCompletelyUnusableString, 'fallback');
// 'fallback'
```


## 🪴 Support
[![Discord](https://discordwidgets.vercel.app/widgets/invite/vamQMmYBNN?theme=dark)](https://discord.gg/invite/vamQMmYBNN)
