import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnChanges {
  @Input()
  public startingCount: number;

  @Output()
  public onCountChanged: EventEmitter<number> = new EventEmitter<number>();

  public count: number = 0;

  constructor(public shared: SharedService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.count = changes['startingCount'].currentValue;
    this._emitCount(this.count);
  }

  public increase(): void {
    this.count++;
    this._emitCount(1);
  }

  public decrease(): void {
    this.count--;
    this._emitCount(-1);
  }

  private _emitCount(change: number): void {
    this.onCountChanged.emit(change);
  }

}
