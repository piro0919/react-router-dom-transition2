# react-router-dom-transition2

[`react-router-dom-transition2`](https://www.npmjs.com/package/react-router-dom-transition2) uses [`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to enable transition.

## Install

`npm i --save react-router-dom-transition2`

## Usage

```js
import Loading from "components/templates/Loading";
import Pages from "containers/pages";
import Fuga from "containers/pages/fuga";
import Hoge from "containers/pages/hoge";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-dom-transition2";

const Containers: React.FC = () => (
  <Router>
    <Switch delay={500} loading={<Loading />} transitionTime={2000}>
      <Route component={Pages} exact={true} path="/" />
      <Route component={Hoge} exact={true} path="/hoge" />
      <Route component={Fuga} exact={true} path="/fuga" />
    </Switch>
  </Router>
);

export default Containers;
```

## Props

### children

- type: React.ReactNode

Same children as the react-router-dom Switch.

### container

- default: document.getElementById("root")
- optional
- type: Element

It is an element that inserts loading component.

### delay

- default: 0
- optional
- type: number

During the transition, delay the rendering of the next component by delay time.

### loading

- default: null
- optional
- type: React.ReactNode

Loading component to be displayed during transition.

### transitionTime

- default: props.delay
- optional
- type: number

Discard loading component after transitionTime.

## TypeScript

OK!
