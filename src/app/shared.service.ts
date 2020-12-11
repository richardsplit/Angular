import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl ="http://localhost:44359/api";
readonly PhotoUrl ="http://localhost:44359/Photos";
  
constructor(private http:HttpClient) { }

getManList():Observable<any[]>{
return this.http.get<any>(this.APIUrl+'/manufacturer');
    }

    addManufacturer(val:any){
      return this.http.post<any>(this.APIUrl+'/manufacturer',val);
    }
    
    updateManufacturer(val:any){
      return this.http.put<any>(this.APIUrl+'/manufacturer',val);
    }
    
    deleteManufacturer(val:any){
      return this.http.delete<any>(this.APIUrl+'/manufacturer/'+val);
    }

    getModList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/models');
          }
      
          addModels(val:any){
            return this.http.post<any>(this.APIUrl+'/models',val);
          }
          
          updateModels(val:any){
            return this.http.put<any>(this.APIUrl+'/models',val);
          }
          
          deleteModels(val:any){
            return this.http.delete<any>(this.APIUrl+'/models/'+val);
          }

          UploadPhoto(val:any){

            return this.http.post(this.APIUrl+'/Models/SaveFile',val);
          }

            getAllManufacturerNames():Observable<any>{
              return this.http.get<any[]>(this.APIUrl+"/Models/GetAllManufacturerNames");
            }
}
