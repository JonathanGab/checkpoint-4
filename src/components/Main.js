import React from 'react';
import { Route, Switch } from 'react-router';
import AddAssetsPage from '../screens/AddAssetsPage';
import ContactPage from '../screens/ContactPage';
import HomePage from '../screens/HomePage';
import RoyalAssetsPage from '../screens/RoyalAssetsPage';
import RoyalFamilyPage from '../screens/RoyalFamilyPage';
import FamillyForm from './FamillyForm';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/royal-family" component={RoyalFamilyPage} />
        <Route exact path="/royal-assets" component={RoyalAssetsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/create" component={FamillyForm} />
        <Route exact path="/add-assets" component={AddAssetsPage} />
      </Switch>
    </main>
  );
}
