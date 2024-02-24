import { GanttChart, Library, LucideLayoutGrid, Settings2 } from "lucide-react";
import { useMemo } from "react";

export const promptExplanation =
  "Based on the description, generate a survey object with 3 fields: name(string) for the form, description(string) of the form and a questions array where every element has 2 fields: text and the fieldType and fieldType can be of these options RadioGroup, Select, Input, Textarea, Switch; and return it in json format. For RadioGroup, and Select types also return fieldOptions array with text and value fields. For example, for RadioGroup, and Select types, the field options array can be [{text: 'Yes', value: 'yes'}, {text: 'No', value: 'no'}] and for Input, Textarea, and Switch types, the field options array can be empty. For example, for Input, Textarea, and Switch types, the field options array can be []";

export const useSidebarRoutes = () =>
  useMemo(() => {
    const routes = [
      {
        name: "Dashboard",
        path: "dashboard",
        icon: LucideLayoutGrid,
      },
      {
        name: "Forms",
        path: "forms",
        icon: Library,
      },
      {
        name: "Analytics",
        path: "analytics",
        icon: GanttChart,
      },
      {
        name: "Settings",
        path: "settings",
        icon: Settings2,
      },
    ];

    return routes;
  }, []);
