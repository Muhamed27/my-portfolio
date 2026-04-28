import * as React from "react";
import * as Recharts from "recharts";

import { cn } from "@/lib/utils";

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within <ChartContainer />");
  }
  return context;
}

const ChartContainer = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <ChartContext.Provider value={{}}>
        <div
          ref={ref}
          className={cn(
            "w-full aspect-video flex items-center justify-center",
            className
          )}
          {...props}
        >
          <Recharts.ResponsiveContainer width="100%" height="100%">
            {children}
          </Recharts.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
);

ChartContainer.displayName = "Chart";

const ChartTooltip = Recharts.Tooltip;
const ChartLegend = Recharts.Legend;

export {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
};