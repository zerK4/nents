import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "multiStepForm",
    type: "registry:component",
    registryDependencies: [
      "button",
      "tooltip",
      "dialog",
      "sonner",
      "separator",
    ],
    dependencies: ["react-hook-form", "framer-motion", "react"],
    files: [
      "components/forms/multiStepForm.tsx",
      "components/ui/cmdCtrlButton.tsx",
    ],
  },
  {
    name: "cmdCtrlButton",
    type: "registry:ui",
    registryDependencies: ["tooltip"],
    dependencies: ["react"],
    files: ["components/ui/cmdCtrlButton.tsx"],
  },
];
