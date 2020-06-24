import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'No. Arete', 'No. Animal', 'Edad', 'Sexo', 'Tipo', 'Situación', '', 'Acciones'],
          dataRows: [
              ['1', '2654153014', '1', '11 Meses', 'M', '', '' , 'Criado'],
              ['2', '2654153015', '2', '11 Meses', 'M', '', '' , 'Criado'],
              ['3', '2654153009', '3', '11 Meses', 'M', '', '' , 'Criado'],
              ['4', '2653471834', '4', '14 Meses', 'M', '', '' , 'Criado'],
          ]
      };
  }

}
