
> ## ⚠️ Deprecated
>
> This package is deprecated and no longer maintained.
>
> It targets `react-router-dom` v4/v5. For modern React Router (v6/v7), use [`react-router-dom-transition`](https://www.npmjs.com/package/react-router-dom-transition) v1+ instead.

---

# react-router-dom-transition2

> Route transition effects for react-router-dom (v5) — v2 rewrite.

[🔗 npm](https://www.npmjs.com/package/react-router-dom-transition2)

## 📦 Install

```bash
npm install react-router-dom-transition2
```

## 🚀 Usage

```tsx
import { BrowserRouter, Route } from "react-router-dom";
import Transition from "react-router-dom-transition2";

function App() {
  return (
    <BrowserRouter>
      <Transition>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Transition>
    </BrowserRouter>
  );
}
```

## 📌 Status

This package targets `react-router-dom` v5 and is no longer under active development.

## 📄 License

MIT
