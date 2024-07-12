import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDialogModule,
        MatButtonModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {

}