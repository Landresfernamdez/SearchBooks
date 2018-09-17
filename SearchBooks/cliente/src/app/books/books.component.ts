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
	public books;
	public p:number=1;
	public minYear:number=1900;
	year = new Date();
	public maxYear:number=this.year.getFullYear();
	filter: Book = new Book();
	constructor(private service:BooksService){
	this.service.devuelveTodoslibros().subscribe(response=>
		this.books=response)
     }
  ngOnInit() {
	}
	data: AOA = [];
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
		    if(this.data.length>0){
				for(var x=0;x<this.data.length;x++){
					if(x>1){
						var listaParametros=this.data[x];
						var libro={
							titulo:listaParametros[0],
							autor:listaParametros[1],
							ano:listaParametros[2],
							numeroInscripcion:listaParametros[3],
							numeroClasificacion:listaParametros[4],
							orden:listaParametros[5],
							bib:listaParametros[6],
							precio:listaParametros[8],
							procedencia:listaParametros[7],
							observaciones:listaParametros[9],
							succcess:1
						}
						this.addBook(libro);
						}
				}
				alert("Se insertaron los registros con exito")
			}else{
				console.log("Debe importar el excel primero");
			}
			
			
	}
	addBook=(newBook)=>{
		this.service.addBook(newBook).subscribe(response=>this.books.push(newBook));
	}
	getLast(){
		this.service.devuelveUltimo().then((data:Book)=>{
				if(data.success){
					console.log("exito");
				}
				else{
					console.log("error");

				}});
		};
	
	}
