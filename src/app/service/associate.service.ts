import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associate } from '../store/Model/Associate.Model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  baseurl = 'http://localhost:3000/associate';
  constructor(private http:HttpClient) { }

  GetAll(){
    return this.http.get<Associate[]>(this.baseurl);
  }

  GetBycode(code:number){
    return this.http.get<Associate>(this.baseurl+"/"+code);
  }

  delete(code:number){
    return this.http.delete(this.baseurl+"/"+code);
  }

  update(data:Associate){
    return this.http.put(this.baseurl+"/"+data.id,data);
  }

  create(inputdata:Associate){    
    return this.http.post(this.baseurl,inputdata)
  }

}
