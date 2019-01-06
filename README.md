## react-navigation with mobx-state-tree demo

This repo aims to show one of the ways you can use mobx-state-tree (MST) with react-navigation. The code is intended to be approachable to people who are new to react-native and react-navigation.

### Expo link

[https://exp.host/@vonovak/mst-demo](https://exp.host/@vonovak/mst-demo)

### Description

The demo showcases:

- using a `NavigationService` ([docs](https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html))
- navigation state persistence ([docs](https://reactnavigation.org/docs/en/state-persistence.html))
- handling of navigation params and their persistence with MST ([docs](https://github.com/mobxjs/mobx-state-tree#snapshots))
- `observer`, `Provider` and `inject` from [mobx-react](https://github.com/mobxjs/mobx-react#provider-and-inject)
- [styled-components](https://www.styled-components.com/docs)

The goal of this demo is to show how you can use react-navigation and MST to achieve optimal developer experience (DX): react-navigation's built-in mechanism persists the navigation state which you can take advantage of during development: a full JS reload will take you back to the screen where you left off before the reload. Navigation params used by the screens are persisted using MST's own (de)serialization features. You can, of course, also take advantage of hot reloading, which is especially helpful for adjusting the look of individual react components.

There are four screens to navigate to:

- HomeScreen
- RepoScreen
- UserScreen
- SettingsScreen

### Running this demo locally

- install expo cli
- clone and run `yarn`
- run `yarn start`
