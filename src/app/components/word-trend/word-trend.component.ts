import { Component, OnInit,ElementRef, ViewChild, Input } from '@angular/core';
import {  ValueByMonthType} from 'src/app/graphql-components';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'word-trend',
  templateUrl: './word-trend.component.html',
  styleUrls: ['./word-trend.component.scss'],
})
export class WordTrendComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  async ngOnInit() {
    const result = await this.translate.get(this.langKeys, {word:this.word}).toPromise();

    Object.keys(result).forEach((key,i)=>{
      var newKey = key.split('.')[1];

      this.lang[newKey] = result[key];
    })

    setTimeout(()=>{
      this.displayBarChart(this.wordTrends.map((item)=>{
        return `${item.yearMonth.year}-${item.yearMonth.month}`;
      }), this.wordTrends.map((item)=>{
        return item.total;
      }));

    },0);

  }

  async displayBarChart(labels:any[],data:any[]){

    let element = this.lineChart.nativeElement;
    element.height = 200;

    new Chart(this.lineChart.nativeElement,{
      type:'line',
      data:{
        labels: labels,
        datasets: [{
          label: this.lang.chartTrends,
          data: data,
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1,
          fill:false,
        }],
      },
      options: {
				responsive: true,
				title: {
					display: true,
					text: this.lang.chartTrends
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
            gridLines: { zeroLineColor: "#131c2b" },
						display: true,
						scaleLabel: {
							display: true,
							labelString: this.lang.chartMonth
						}
					}],
					yAxes: [{
            gridLines: { zeroLineColor: "#131c2b" },
						display: true,
						scaleLabel: {
							display: true,
							labelString: this.lang.chartCount
            },
            ticks: {
              stepSize: 50
            }
					}]
				}
			}
    })
  }

  public lang:any={};

  @Input()
  public word:string;

  @Input()
  public wordTrends:ValueByMonthType[];
  
  @ViewChild('lineChart') 
  public lineChart:ElementRef;


  private langKeys:string[] = [
    'word-info.trendHeader',
    'word-info.chartTrends',
    'word-info.chartMonth',
    'word-info.chartCount',

  ]
}
