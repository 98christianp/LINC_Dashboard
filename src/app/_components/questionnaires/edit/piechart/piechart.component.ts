import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  @Input() private data: Array<{label: string, count: number}>;

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'doughnut';

  public donutColors=[
    {
      backgroundColor: [
        'rgba(255, 98, 74, 1)',
        'rgba(182, 255, 79, 1)'
    ]
    }
  ];

  ngOnInit() {
      this.updateChart();
  }

  ngOnChanges(newData: Array<{label: string, count: number}>) {
      this.updateChart();
  }

  updateChart(){
        this.pieChartLabels = this.data.map(x => x.label);
        this.pieChartData = this.data.map(x => x.count);
  }
}
