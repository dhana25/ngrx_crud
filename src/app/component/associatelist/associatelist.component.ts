import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import {  getassociatelist, getassociateone } from 'src/app/store/Associate/Associate.Selector';
import { Associate } from 'src/app/store/Model/Associate.Model';
import { loadassociate,getassociate, deleteassociate } from 'src/app/store/Associate/Associate.Action';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associatelist',
  templateUrl: './associatelist.component.html',
  styleUrls: ['./associatelist.component.css']
})
export class AssociatelistComponent implements OnInit {
  associtelist!:Associate[];
  datasource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  displayedcolumn:string[]= ["code","name","email","phone","type","address","associategroup","status","action"];

  constructor(private dialog:MatDialog,private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(loadassociate())
    this.store.select(getassociatelist).subscribe(item => {
      this.associtelist = item
      //console.log(this.associtelist);
      this.datasource = new MatTableDataSource<Associate>(this.associtelist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
    
  }

  addfn(){
     this.openpopup(0,'create Associate')
  }

  fnedit(code:number) {
    this.store.dispatch(getassociate({id:code}))
    this.openpopup(code,'Update Associate')
  }

  fndelete(code:number){
    if(confirm("Are you want to delete")){
       this.store.dispatch(deleteassociate({id:code}))
    }
  }

  openpopup(code:number,title:string) {
    this.dialog.open(AddassociateComponent,{
      width:'50%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data: {
        code:code,
        title:title
      } 
    })
  }

}
