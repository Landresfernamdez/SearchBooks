import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
type AOA = any[][];
import {BooksService} from './books.service';
import { Book } from './Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private service:BooksService){
		
	 }
  ngOnInit() {
	}
	books:Book[]=[];
	data: AOA = [ [1, 2], [3, 4] ];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';
	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
			console.log(this.data);
		};
		reader.readAsBinaryString(target.files[0]);
	}
	export(): void {
		/* generate worksheet */
		const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		/* save to file */
		XLSX.writeFile(wb, this.fileName);
	}
	//Funcion que se encarga de agregar todos los registros
	addRegistersbooks(){
			
	}
	addBook(newBook){
		this.service.addBook(newBook).subscribe(response=>this.books.push(newBook));
	}
	getLast(){
		this.service.devuelveUltimo().then((data:Book)=>{
				if(data.success){

				}
				else{

				}});
		};
	}
