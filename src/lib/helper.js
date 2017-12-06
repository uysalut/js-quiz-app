function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

exports.onNavigationStateChange = tracker => (prevState, currentState) => {
  const currentScreen = getCurrentRouteName(currentState);
  const prevScreen = getCurrentRouteName(prevState);
  if (prevScreen !== currentScreen) {
    tracker.trackScreenView(currentScreen);
  }
};
