import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferInfoService } from '../transfer-info.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  closeResult = '';
  data: any = [];
  pagination: any = {
    total: 0,
    pages: 0,
    currentPage: 1,
  };
  arrayPages: any = [];

  filter: string = '';

  testModal: Modal | undefined;

  character: any = {
    name: '',
    image: '',
    status: '',
  };

  filterStatus: string = '';

  constructor(private transferInfoService: TransferInfoService) {}

  ngOnInit(): void {
    const observer1$: Subscription =
      this.transferInfoService.callback.subscribe((response: any) => {
        this.filter = response;
      });

    const observer2$: Subscription = this.transferInfoService
      .getAllCharacters$()
      .subscribe((response: any) => {
        this.data = response.results;
        this.pagination.pages = response.info.pages;
        console.log('Esta es la respuesta', response);
        this.page(this.pagination.pages);
        this.pagination.total = response.results.length;
      });

    const observer3$: Subscription = this.transferInfoService
      .getOneCharacter$()
      .subscribe((response: any) => {
        console.log(response);
        this.character = response;
      });

    const observer4$: Subscription =
      this.transferInfoService.callback2.subscribe((response: any) => {
        this.filterStatus = response;

      });
  }

  openModal(id: any): void {
    this.transferInfoService.idCharacter = id;
    this.transferInfoService.getOneCharacter$().subscribe((response: any) => {

      this.character = response;
      console.log(this.character.name);
    });
    let el_testModal = document.getElementById('testModal');
    if (el_testModal) {
      this.testModal = new Modal(el_testModal, {
        keyboard: true,
      });
    }
    this.testModal?.show();



  }

  page(pages: number): void {
    this.arrayPages = [];
    for (
      let i = this.pagination.currentPage;
      i <= this.pagination.currentPage + 4;
      i++
    ) {
      this.arrayPages.push(i);
    }
  }

  nextpage(): void {
    this.transferInfoService.page++;
    this.pagination.currentPage++;

    this.ngOnInit();
  }

  prevpage(): void {
    this.transferInfoService.page--;
    this.pagination.currentPage--;

    this.ngOnInit();
  }

  updatepage(number: number): void {
    this.transferInfoService.page = number;
    this.pagination.currentPage = number;

    this.ngOnInit();
  }
}
