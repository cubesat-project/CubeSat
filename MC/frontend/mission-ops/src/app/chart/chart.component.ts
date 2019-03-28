import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';

NoDataToDisplay(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  private _values: number[];
  private _minValue: number;
  private _maxValue: number;
  private _title: string;
  private _xAxis: string;
  private _yAxis: string;
  private _name: string;
  private _labels: string[];

  @Input() startDate: Date;
  @Input() endDate: Date;

  @Input()
  private get values() {
    return this._values;
  }
  private set values(val: number[]) {
    this._values = val;
  }

  @Input()
  private get minValue() {
    return this._minValue;
  }
  private set minValue(val: number) {
    this._minValue = val;
  }

  @Input()
  private get maxValue() {
    return this._maxValue;
  }
  private set maxValue(val: number) {
    this._maxValue = val;
  }

  @Input()
  private get title() {
    return this._title;
  }
  private set title(val: string) {
    this._title = val;
  }

  @Input()
  private get name() {
    return this._name;
  }
  private set name(val: string) {
    this._name = val;
  }

  @Input()
  private get xAxis() {
    return this._xAxis;
  }
  private set xAxis(val: string) {
    this._xAxis = val;
  }

  // TODO: Set y-axis using telemetryType table info.
  @Input()
  private get yAxis() {
    return this._yAxis;
  }
  private set yAxis(val: string) {
    this._yAxis = val;
  }

  @Input()
  private get labels() {
    return this._labels;
  }
  private set labels(val: string[]) {
    this._labels = val;
  }

  Highcharts = Highcharts;
  chartOptions: any;

  constructor() { }

  ngOnInit() {
    this.buildChart();
}

ngOnChanges(changes: SimpleChanges) {
  if (changes.values && this.Highcharts && this.Highcharts.charts.length > 0 && this.startDate && this.endDate) {
    this.buildChart();
  }
}

buildChart() : void
{
  var msLabels = this.labels.map(x => new Date(x).getTime());
  var maxValues = new Array(this.values.length).fill(this.maxValue);
  var minValues = new Array(this.values.length).fill(this.minValue);
  var zones;

  if (this.maxValue) {
    zones = [{
      value: this.minValue,
      color: '#FF0000',
    }, {
      value: this.maxValue,
    }, {
      color: '#FF0000',
    }];
  } else {
    zones = [];
  }
  this.chartOptions = {
    title: {
      text: this.title
    },
    xAxis: {
      title: {
        text: this.xAxis
      },
      categories: msLabels,
      type: 'datetime',
      labels: {
        format: '{value:%Y-%m-%d %H:%M:%S}',
      }
    },
    yAxis: {
      title: {
        text: this.yAxis
      }
    },
    tooltip: {
      crosshairs: [true],
      formatter: function(){
        return new Date(this.x).toUTCString() + "<br/>" + this.y;
      }
    },
    series: [{
      name: this.name,
      type: 'line',
      showInLegend: false,
      data: this.values,
      zones: zones,
      animation: {
        duration: 1000,
      }
    }, {
      name: "Max Value",
      type: 'line',
      showInLegend: false,
      data: maxValues,
      color: "#ff0000",
      marker: {enabled: false},
      states: { hover: { enabled: false } },
    }, {
      name: "Min Value",
      type: 'line',
      showInLegend: false,
      data: minValues,
      color: "#ff0000",
      marker: {enabled: false},
      states: { hover: { enabled: false } },
    }],
    lang: {
      noData: "No data to display."
    },
    noData: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px',
            color: '#303030'
        }
    }
  }
}

}
