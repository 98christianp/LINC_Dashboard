import { Component, OnInit, Input} from '@angular/core';

/**
 * @description Line chart component showing data in a line chart
 * @author Mathias Milter Liboriussen
 */
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() { }

  @Input() private data: Array<{time: string, count: number}>;

  private primColor = 'rgba(149, 219, 129, 1)';
  private secColor = 'rgba(149, 219, 129, 0.2)';
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Count'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Hour'
      }
    }]
  }
  };
  public chartType = 'line';
  public chartLegend = true;
  public chartLabels;
  public chartData;

  ngOnInit() {
      this.updateChart();
  }

  ngOnChanges(newData: Array<{time: string, count: number}>) {
      this.updateChart();
  }

  /**
   * @description Updates the line chart with new data
   * @author Mathias Milter Liboriussen
   */
  public updateChart(){
        this.chartLabels = this.data.map(x => x.time);
        this.chartData = [
          {data: this.data.map(x => x.count),
            label: 'Passengers',
            hoverBackgroundColor: this.primColor,
            backgroundColor: this.secColor,
            pointBackgroundColor: 'rgba(0, 0, 0)',
            borderColor: this.primColor}
        ];
  }

}
