import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  VirtualScrollService,
  TreeGridComponent,
  RowDDService,
} from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './jsontreegriddata';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [VirtualScrollService, RowDDService],
})
export class AppComponent {
  public vData: Object[] = [];

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;

  public ngOnInit(): void {
    if (virtualData.length === 0) {
      dataSource();
    }
    this.vData = virtualData;
  }
}
