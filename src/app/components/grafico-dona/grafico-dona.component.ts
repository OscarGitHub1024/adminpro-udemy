import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() leyenda : string;
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: SingleDataSet;
  @Input() doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
