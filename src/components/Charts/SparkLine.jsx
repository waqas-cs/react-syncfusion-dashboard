import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>; // Fallback UI
  }

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${y}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
