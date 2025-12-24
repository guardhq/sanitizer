# @guardbot/sanitizer
> **Tiny text sanitizer that's really just a bunch of libraries in a trenchcoat.**

## **📦 Installation**
```sh
$ npm install @guardbot/sanitizer # via npm
$ yarn add @guardbot/sanitizer # yarn
$ pnpm add @guardbot/sanitizer # pnpm
```

## **🪴 Usage**
```typescript
import sanitizer from '@guardbot/sanitizer';

sanitizer('aéà)àçé');
// 'aea)ace'

sanitizer(someCompletelyUnusableString, 'fallback');
// 'fallback'
```