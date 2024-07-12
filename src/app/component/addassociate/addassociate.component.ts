import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addassociate, updateassociate } from 'src/app/store/Associate/Associate.Action';
import { getassociatelist, getassociateone } from 'src/app/store/Associate/Associate.Selector';
import { Associate } from 'src/app/store/Model/Associate.Model';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})

export class AddassociateComponent implements OnInit {
  title: any;
  isEdit = false;
  dialogdata: any;
  maxiid!: number;

  constructor(private builder: FormBuilder, private ref: MatDialogRef<AddassociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store
  ) { }


  ngOnInit(): void {
   //console.log(this.data.title)
      if(this.data.title == 'Update Associate'){
        this.store.select(getassociateone).subscribe(res => {
          this.associateForm.setValue({ id: res.id, name: res.name, email: res.email, phone: res.phone, address: res.address, group: res.associategroup, type: res.type, status: res.status })
        })
      }
  }

  maxid = this.store.select(getassociatelist).subscribe(item => {
    this.maxiid = Math.max(...item.map(o => o.id))
  })

  associateForm = this.builder.group({

    id: this.builder.control((this.maxiid + 1)),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    group: this.builder.control('level1', Validators.required),
    type: this.builder.control('CUSTOMER'),
    status: this.builder.control(true)
  })

  saveAssociate() {
    if (this.associateForm.valid) {
      const _obj: Associate = {
        id: this.associateForm.value.id as any,
        name: this.associateForm.value.name as string,
        email: this.associateForm.value.email as string,
        phone: this.associateForm.value.phone as string,
        address: this.associateForm.value.address as string,
        associategroup: this.associateForm.value.group as string,
        type: this.associateForm.value.type as string,
        status: this.associateForm.value.status as boolean
      }
      if(this.data.title == 'create Associate'){
        this.store.dispatch(addassociate({ inputdata: _obj }))
      }else {
        this.store.dispatch(updateassociate({inputdata:_obj}))
      }
     
      this.closup();

    }
  }

  closup() {
    this.ref.close();
  }

}
