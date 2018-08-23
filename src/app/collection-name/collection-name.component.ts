import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {data} from '../data'
import { jhonPoint} from '../data'
import { points} from '../data'
import { fact} from '../data'
import {PointData} from '../model/pointdata';
import {jhonPoints} from '../model/jhonPoint';
import {personPoints} from '../model/personPoints';
import {facts} from '../model/facts';
@Component({
  selector: "app-collection-name",
  templateUrl: "./collection-name.component.html",
  styleUrls: ["./collection-name.component.css"]
})
export class CollectionNameComponent implements OnInit {
  pointData:PointData;
  jhonPoint:jhonPoints;
  point:Array<personPoints>;
  fact:Array<facts>;
  constructor(private httpService: HttpClient) {}

  ngOnInit() {
    this.pointData = data[0];
    this.jhonPoint = jhonPoint[0];
    this.point = points;
    this.fact = fact;
  }
}

  

  
  


