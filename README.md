# React Lag Radar

[Lag Radar](https://mobz.github.io/lag-radar/) developed by [Ben Birch](https://github.com/mobz), wrapped into a React component for convenience.

You can use it in development to track whether your app is responsive or is dropping frames. Particularly neat for demos of [React 18 `startTransition`](https://github.com/reactwg/react-18/discussions/41).

(Note: React 18 is still in alpha and [will be for a while](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html).)

```
npm install react-lag-radar
```

## Usage

```js
import LagRadar from 'react-lag-radar';

<LagRadar />

<LagRadar size={100} />

<LagRadar
  frames={20}
  speed={0.0017}
  size={100}
  inset={3}
/>
```

## License

ISC