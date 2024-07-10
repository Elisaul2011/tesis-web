import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsAlmacen, dataFormAlmacen, formularioAlmacen } from './almacen.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { almacenService } from '../../services/almacen.service';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { IFormulario } from '../../interfaces/fromulario.interface';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css',
})
export class AlmacenComponent {
    columnsAlmacen: IColumns[] = columnsAlmacen;
    dataAlmacen: any[] = [];

    // almacenService = inject(almacenService);
    dialog = inject(MatDialog);

    constructor(){
      effect(() => {
        // this.dataAlmacen = this.almacenService.getUserData();
      })
    }

    ngOnInit(): void {
      // this.almacenService.getUsers();
    }

    openDialog(): void {
      formularioAlmacen.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAlmacen,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';
        // this.almacenService.postUsers(result)
      })
    }

    editDataDialog(data: any): void {
      const findNameUser = formularioAlmacen.dataForm.find(form => form.formControl == 'nameUser');
      const findLastnameUser = formularioAlmacen.dataForm.find(form => form.formControl == 'lastnameUser');
      const findRoles = formularioAlmacen.dataForm.find(form => form.formControl == 'rolId');

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
        data: formularioAlmacen,
      });

      formularioAlmacen.dataForm.push({
        label: '',
        formControl: 'idUser',
        value: data.idUser,
        required: false,
        typeInput: ''
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';
        // this.almacenService.putUsers(result)
      })
    }

}
