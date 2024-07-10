import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { columnsAeronave, dataFormAeronave, formularioAeronave } from './aeronave.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { aeronaveService } from '../../services/aeronave.service';
import { IAlmacenes } from '../../interfaces/almacen';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { IAeronave } from '../../interfaces/aeronave';

@Component({
  selector: 'app-aeronave',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './aeronave.component.html',
  styleUrl: './aeronave.component.css',
})
export class AeronaveComponent {
    columnsAeronave: IColumns[] = columnsAeronave;
    dataAeronave: IAeronave[] = [];

    aeronaveService = inject(aeronaveService);
    dialog = inject(MatDialog);

    constructor(){
      effect(() => {
        this.dataAeronave = this.aeronaveService.getUserData();
      })
    }

    ngOnInit(): void {
      this.aeronaveService.getUsers();
    }

    openDialog(): void {
      formularioAeronave.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAeronave,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';
        this.aeronaveService.postUsers(result)
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
        result.password = '12345678';
        this.aeronaveService.putUsers(result)
      })
    }


}

