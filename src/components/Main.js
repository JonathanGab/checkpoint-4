import React from 'react';
import { Route, Switch } from 'react-router';
import ContactPage from '../screens/ContactPage';
import HomePage from '../screens/HomePage';
import RoyalAssetsPage from '../screens/RoyalAssetsPage';
import RoyalFamilyPage from '../screens/RoyalFamilyPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/royal-family" component={RoyalFamilyPage} />
        <Route exact path="/royal-assets" component={RoyalAssetsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}
