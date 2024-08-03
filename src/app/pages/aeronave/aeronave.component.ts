import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { aeronave, columnsAeronave, dataFormAeronave, formularioAeronave } from './aeronave.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';


import { FormularioComponent } from '../../components/formulario/formulario.component';
import { IAeronave } from '../../interfaces/aeronave';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aeronave',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule
  ],
  templateUrl: './aeronave.component.html',
  styleUrl: './aeronave.component.css',
})
export class AeronaveComponent {
    columnsAeronave: IColumns<any>[] = columnsAeronave;
    dataAeronave: IAeronave[] = aeronave;

    //aeronaveService = inject(aeronaveService);
    dialog = inject(MatDialog);

    constructor(){
      effect(() => {

      })
    }

    ngOnInit(): void {

    }

    defectColumnAction(dataComponent: ISendDataTable): void {
      if(dataComponent.action == 'add'){
        this.openDialog();
      }
      if(dataComponent.action == 'edit'){
        this.editDataDialog(dataComponent.data);
      }

    }

    openDialog(): void {
      formularioAeronave.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAeronave,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.id=this.dataAeronave.length+1;
          this.dataAeronave.push(result)
      })
    }

    editDataDialog(data: any): void {
      const findNameUser = formularioAeronave.dataForm.find(form => form.formControl == 'nameUser');
      const findLastnameUser = formularioAeronave.dataForm.find(form => form.formControl == 'lastnameUser');
      const findRoles = formularioAeronave.dataForm.find(form => form.formControl == 'rolId');

      // dataFormUser.map(form => {
      //   const findForm = formularioUser.dataForm.find(form => form.formControl == form.formControl);

      //   if(findForm){
      //     findForm.value = data[form.formControl];
      //   }
      // });

      if(findRoles && findNameUser && findLastnameUser){
        findRoles.value = data.rolId;
        findNameUser.value = data.nameUser;
        findLastnameUser.value = data.lastnameUser;
      }

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAeronave,
      });

      formularioAeronave.dataForm.push({
        label: '',
        formControl: 'idUser',
        value: data.idUser,
        required: false,
        typeInput: ''
      });

      dialogRef.afterClosed().subscribe(result => {
        const findData = this.dataAeronave.find(com => com.id==result.id)

        if (findData){
          findData.id=result.id
          findData.aeronave=result.aeronave
          findData.pn=result.pn
          findData.descripcion=result.descripcion
          findData.sn=result.sn
          findData.cantidad=result.cantidad
          findData.order=result.order
        }
      })

    }


}

