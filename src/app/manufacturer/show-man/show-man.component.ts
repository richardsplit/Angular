import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-man',
  templateUrl: './show-man.component.html',
  styleUrls: ['./show-man.component.css']
})
export class ShowManComponent implements OnInit {

  constructor(private service:SharedService) { }


  ManufacturerList:any=[];


  ModalTitle!: string;
  ActivateAddEditManComp:boolean=false;
  man:any;

  ngOnInit(): void {
    this.refreshManList();
  }
  
    addClick() {
        this.man={
          ManufactureId:0,
          ManufacturerName:""
        }

        this.ModalTitle="Add Manufacturer";
        this.ActivateAddEditManComp=true;

    }

    editClick(item: any){
      this.man=item;
      this.ModalTitle="Edit Manufacturer";
      this.ActivateAddEditManComp=true;
    }

    closeClick(){
      this.ActivateAddEditManComp=false;
      this.refreshManList();
    }


      refreshManList(){
        this.service.getManList().subscribe(data=>{
          this.ManufacturerList=data;

        });
      }
}
