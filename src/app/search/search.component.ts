import { Component, OnInit } from '@angular/core';
import { TransferInfoService } from '../transfer-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  info: any = '';
  constructor(private transferInfoService: TransferInfoService) { }

  ngOnInit(): void {
  }

  send(): void{
    this.transferInfoService.callback.emit(this.info);


  }
}
