import React from "react";
import {
  AppRegistry,
  View,
} from "react-360";
import { AppContent } from "./components/index.js";
import { withAppContext } from "./providers/index.js";

const MeditationApp = withAppContext(() => (
    <View style={{
      transform: [{ translate: [0, 0, -2] }]
    }}>
      <AppContent />
    </View>
));


AppRegistry.registerComponent("AppContent", () => AppContent);
AppRegistry.registerComponent("MeditationApp", () => MeditationApp);
