import React from "react";
import "./app.css";
import { AppLayout } from "@common/ui/app-layout";
import { Routes, useRoutes } from "react-router-dom";
import * as features from "./features";

const useFeaturesRoutes = () => {
  const allRoutes = Object.values(features)
    .map((feature) => feature.contentRoutes)
    .flat();

  return useRoutes(allRoutes);
};

function App() {
  const routes = useFeaturesRoutes();

  return (
    <AppLayout>
      <Routes>{routes}</Routes>
    </AppLayout>
  );
}

export default App;
