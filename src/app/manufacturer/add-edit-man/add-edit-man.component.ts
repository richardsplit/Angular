import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-man',
  templateUrl: './add-edit-man.component.html',
  styleUrls: ['./add-edit-man.component.css']
})
export class AddEditManComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() man:any;
  ManufacturerId:string;
  ManufacturerName:string;


  ngOnInit(): void {
    this.ManufacturerId=this.man.ManufacturerId;
    this.ManufacturerName=this.man.ManufacturerName;
  }


    addManufacturer(){
      var val ={ManufacturerId:this.ManufacturerId,
          ManufacturerName:this.ManufacturerName};
          this.service.addManufacturer(val).subscribe(res=>{
            alert(res.toString());
          });
    }

    updateManufacturer(){
      var val ={ManufacturerId:this.ManufacturerId,
        ManufacturerName:this.ManufacturerName};
        this.service.updateManufacturer(val).subscribe(res=>{
          alert(res.toString());
        });
    }
}
