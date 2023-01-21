import { Component, OnInit } from '@angular/core';
import { TransferInfoService } from '../transfer-info.service';

@Component({
  selector: 'app-search-status',
  templateUrl: './search-status.component.html',
  styleUrls: ['./search-status.component.css']
})
export class SearchStatusComponent implements OnInit {

  constructor(private transferInfoService: TransferInfoService) { }

  ngOnInit(): void {
  }

  send(info:any): void{
    this.transferInfoService.callback2.emit(info);
    console.log(info)


  }
}
