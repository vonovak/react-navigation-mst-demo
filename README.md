## react-navigation with mobx-state-tree demo

This repo aims to show one of the ways you can use mobx-state-tree (MST) with react-navigation.

The demo showcases:

- using a `NavigationService` as [documented](https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
- navigation state persistence as [documented](https://reactnavigation.org/docs/en/state-persistence.html)
- navigation params persistence using MST as [documented](https://github.com/mobxjs/mobx-state-tree#snapshots)

The goal of this demo is to show how you can use react-navigation and MST to achieve optimal developer experience (DX): react-navigation's built-in mechanism persists the navigation state which you can take advantage of during development: a full JS reload will take you back to the screen where you left off before the reload. Navigation params used by the screens are persisted using MST's own persistance and hydration features. You can, of course, also take adantage of hot reloading, which is especially helpful for adjusting the design of individual react components.
