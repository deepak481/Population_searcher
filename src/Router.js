import React, { lazy, Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardLoader from "./components/dashboardLoader/DashboardLoader";

const MyMap = lazy(() => import("./routes/MyMap"));

const renderLoader = () => (
  <>
    <main>
      <DashboardLoader />
    </main>
  </>
);

export default function Router() {
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/">
            <MyMap />
          </Route>
          <Route exact path="/:searchKey/:index">
            <MyMap />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
