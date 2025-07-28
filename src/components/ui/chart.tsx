import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ReactNode;
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, cfg]) => cfg.theme || cfg.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            return `
${prefix} [data-chart="${id}"] {
${colorConfig
  .map(([key, cfg]) => {
    const color = cfg.theme?.[theme as keyof typeof THEMES] || cfg.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}`;
          })
          .join("\n"),
      }}
    />
  );
};

// Tooltip
const ChartTooltip = RechartsPrimitive.Tooltip;

type TooltipPayload = {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: string;
  payload?: Record<string, any>;
};

type ChartTooltipContentProps = {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
  formatter?: (
    value: number,
    name: string,
    entry: TooltipPayload,
    index: number,
    fullPayload?: Record<string, any>
  ) => React.ReactNode;
  labelFormatter?: (
    label: string | undefined,
    payload: TooltipPayload[]
  ) => React.ReactNode;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  className?: string;
};

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      label,
      formatter,
      labelFormatter,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      nameKey,
      labelKey,
      className,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload || payload.length === 0) return null;

    const tooltipLabel = !hideLabel && label
      ? labelFormatter
        ? labelFormatter(label, payload)
        : <div className="font-medium">{label}</div>
      : null;

    return (
      <div
        ref={ref}
        className={cn(
          "min-w-[8rem] rounded-md border bg-background px-3 py-2 text-xs shadow",
          className
        )}
      >
        {tooltipLabel}
        <div className="grid gap-1.5 mt-1">
          {payload.map((item, index) => {
            const key = nameKey || item.name || item.dataKey || "value";
            const nested = item.payload || {};
            const itemConfig = config[nested[key] || key] || config[key];

            return (
              <div key={index} className="flex justify-between gap-2">
                <div className="flex items-center gap-2">
                  {!hideIndicator && (
                    <div
                      className={cn("w-2 h-2 rounded-sm")}
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                  <span>{itemConfig?.label || item.name}</span>
                </div>
                <span className="font-mono">{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// Legend
const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  {
    payload?: TooltipPayload[];
    verticalAlign?: "top" | "bottom";
    hideIcon?: boolean;
    nameKey?: string;
    className?: string;
  }
>(({ className, payload, verticalAlign = "bottom", hideIcon = false, nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap justify-center gap-4 text-xs",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, index) => {
        const key = nameKey || item.name || item.dataKey || "value";
        const nested = item.payload || {};
        const itemConfig = config[nested[key] || key] || config[key];

        return (
          <div key={index} className="flex items-center gap-2">
            {!hideIcon && (
              <div
                className="w-2 h-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span>{itemConfig?.label || item.name}</span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

// Final export
export {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
