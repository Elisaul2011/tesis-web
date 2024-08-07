import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsTaller, dataFormTaller, formularioTaller, datosTaller } from './taller.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { ITaller } from '../../interfaces/taller';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButton
  ],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css',
})
export class TallerComponent {
    columnsTaller: IColumns<any>[] = columnsTaller;
    dataTaller: ITaller[] = datosTaller;


    dialog = inject(MatDialog);

    constructor(){
      effect(() => {

      })
    }

    ngOnInit(): void {

    }

    openDialog(): void {
      formularioTaller.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioTaller,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';

      })
    }

    defectColumnAction(dataComponent: ISendDataTable): void {
      if(dataComponent.action == 'add'){
        this.openDialog();
      }
      if(dataComponent.action == 'edit'){
        this.editDataDialog(dataComponent.data);
      }
      // if(dataComponent.action == 'delete'){
      //   this.deleteData(dataComponent.data);
      // }
    }

    editDataDialog(data: ITaller): void {
      const findNameUser = formularioTaller.dataForm.find(form => form.formControl == 'nameUser');
      const findLastnameUser = formularioTaller.dataForm.find(form => form.formControl == 'lastnameUser');
      const findRoles = formularioTaller.dataForm.find(form => form.formControl == 'rolId');

      // dataFormUser.map(form => {
      //   const findForm = formularioUser.dataForm.find(form => form.formControl == form.formControl);

      //   if(findForm){
      //     findForm.value = data[form.formControl];
      //   }
      // });



      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioTaller,
      });

      formularioTaller.dataForm.push({
        label: '',
        formControl: 'idUser',
        value: '',
        required: false,
        typeInput: ''
      });

      dialogRef.afterClosed().subscribe(result => {
        result.id=this.dataTaller.length+1;
          this.dataTaller.push(result)
      })
    }
}
