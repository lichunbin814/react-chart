import React from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

function getXAccessor(data){
    return data.date;
}

let CandlesChart = React.forwardRef((props, ref) => {
    const { type, width, ratio, data } = props;
    return (
        <div className="ChartJS">
            <ChartCanvas
                ref={ref}
                height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                type={type}
                data={data}
                seriesName="MSFT"
                xAccessor={getXAccessor}
                xScale={scaleTime()}
                xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
            >
                <Chart id={1} yExtents={(d) => [d.high, d.low]}>
                    <XAxis axisAt="bottom" orient="bottom" ticks={6} />
                    <YAxis axisAt="left" orient="left" ticks={5} />
                    <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
                </Chart>
            </ChartCanvas>
        </div>
    );
});

CandlesChart.prototype = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandlesChart.defaultProps = {
    type: "svg",
};

CandlesChart = fitWidth(CandlesChart);

export default CandlesChart;