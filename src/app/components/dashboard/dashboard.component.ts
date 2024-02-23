import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { Shop } from 'src/app/shared/interfaces/shop';
import { AuthService } from 'src/app/shared/service/auth.service';
import { OrderService } from 'src/app/shared/service/order.service';
import { ProductService } from 'src/app/shared/service/product.service';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doughnutData = doughnutData;
  public pieData = pieData;
  allOrders:Order[]=[];
  lastOrders:Order[]=[];
  allOrdersToday:Order[]=[];
  allPaymentsToday:any=0;
  newOrdersToday:any=[];
  deliveredOrdersToday:any=[];
  deliveredOrders :any=[];
  deliveredOrdersThisMonth:any=[];
  thisMonthOrders:Order[]=[];
  allPayments:any=0;
  curdate:any;
  todaydate:any;
  public shops:Shop[]=[]
  thisMonthPayments:any=0;
  customers:any = 0;
  constructor( private orderService:OrderService ,private authService:AuthService,private productService:ProductService) {
    Object.assign(this, { doughnutData, pieData })
  }

  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;


  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // lineChart
  public smallLineChartData = chartData.smallLineChartData;
  public smallLineChartLabels = chartData.smallLineChartLabels;
  public smallLineChartOptions = chartData.smallLineChartOptions;
  public smallLineChartColors = chartData.smallLineChartColors;
  public smallLineChartLegend = chartData.smallLineChartLegend;
  public smallLineChartType = chartData.smallLineChartType;

  // lineChart
  public smallLine2ChartData = chartData.smallLine2ChartData;
  public smallLine2ChartLabels = chartData.smallLine2ChartLabels;
  public smallLine2ChartOptions = chartData.smallLine2ChartOptions;
  public smallLine2ChartColors = chartData.smallLine2ChartColors;
  public smallLine2ChartLegend = chartData.smallLine2ChartLegend;
  public smallLine2ChartType = chartData.smallLine2ChartType;

  // lineChart
  public smallLine3ChartData = chartData.smallLine3ChartData;
  public smallLine3ChartLabels = chartData.smallLine3ChartLabels;
  public smallLine3ChartOptions = chartData.smallLine3ChartOptions;
  public smallLine3ChartColors = chartData.smallLine3ChartColors;
  public smallLine3ChartLegend = chartData.smallLine3ChartLegend;
  public smallLine3ChartType = chartData.smallLine3ChartType;

  // lineChart
  public smallLine4ChartData = chartData.smallLine4ChartData;
  public smallLine4ChartLabels = chartData.smallLine4ChartLabels;
  public smallLine4ChartOptions = chartData.smallLine4ChartOptions;
  public smallLine4ChartColors = chartData.smallLine4ChartColors;
  public smallLine4ChartLegend = chartData.smallLine4ChartLegend;
  public smallLine4ChartType = chartData.smallLine4ChartType;

  public chart3 = chartData.chart3;



  // events
  public chartClicked(e: any): void {
  }
  public chartHovered(e: any): void {
  }

  ngOnInit() {
    
    this.orderService.getAllOrders().subscribe(orders=>{
      this.allOrders = orders;
      this.deliveredOrders = this.allOrders.filter(item=>item.status == "3");
      this.allPayments=this.totalPrice();
      let month = new Date().getMonth() + 1;
      let monthstr = month.toString();
      if(month<10){
        monthstr = "0"+month;
      }
      let day = new Date().getUTCDate();
      let daystr = day.toString();
      if(day<10){
        daystr = "0"+day;
      }
     
      this.curdate = new Date().getFullYear().toString()+'-'+monthstr+'-'+"01T00:00:00";
      this.todaydate = new Date().getFullYear().toString()+'-'+monthstr+'-'+daystr+'T00:00:00' ;

      let timeM = new Date(this.curdate).getTime();
      let timeT = new Date(this.todaydate).getTime();
      console.log(timeM)
      console.log(timeT)
      this.thisMonthOrders = this.allOrders.filter(item=>item.orderId > timeM);
      this.allOrdersToday =  this.allOrders.filter(item=>item.orderId >= timeT);
      this.newOrdersToday =  this.allOrders.filter(item=>item.orderId >= timeT && item.status == "0");
      this.deliveredOrdersToday =  this.allOrders.filter(item=>item.orderId >= timeT && item.status == "3");
      this.deliveredOrdersThisMonth = this.thisMonthOrders.filter(item=>item.status == "3");
      this.thisMonthPayments = this.totalPriceThisMonth();
      this.allPaymentsToday = this.totalPriceToday();
      console.log(orders)
    })

    this.orderService.getLastOrders().subscribe(res=>{
      this.lastOrders = res;
    });

    this.authService.getAllCustomers().subscribe(cust=>this.customers = cust);
    this.productService.getShops.subscribe(shops=>{this.shops=shops})

  }

  totalPrice() {
    let total = 0;
    for(let data of this.deliveredOrders){
      total += data.totalAmount;
    }
    return total;
  }

  totalPriceThisMonth() {
    let total = 0;
    for(let data of this.deliveredOrdersThisMonth){
      total += data.totalAmount;
    }
    return total;
  }

  totalPriceToday() {
    let total = 0;
    for(let data of this.deliveredOrdersToday){
      total += data.totalAmount;
    }
    return total;
  }
 

}
