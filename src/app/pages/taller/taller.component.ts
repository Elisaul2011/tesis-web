import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsTaller, dataFormTaller, formularioTaller } from './taller.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns } from '../../interfaces/table.interface';
import { tallerService } from '../../services/taller.service';
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
    columnsTaller: IColumns[] = columnsTaller;
    dataTaller: ITaller[] = [];

    tallerService = inject(tallerService);
    dialog = inject(MatDialog);

    constructor(){
      effect(() => {
        this.dataTaller = this.tallerService.getUserData();
      })
    }

    ngOnInit(): void {
      this.tallerService.getUsers();
    }

    openDialog(): void {
      formularioTaller.dataForm.map(form => form.value = '');

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioTaller,
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';
        this.tallerService.postUsers(result)
      })
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

      if(findRoles && findNameUser && findLastnameUser){
        findRoles.value = data.rolId;
        findNameUser.value = data.nameUser;
        findLastnameUser.value = data.lastnameUser;
      }

      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioTaller,
      });

      formularioTaller.dataForm.push({
        label: '',
        formControl: 'idUser',
        value: data.idUser,
        required: false,
        typeInput: ''
      });

      dialogRef.afterClosed().subscribe(result => {
        result.password = '12345678';
        this.tallerService.putUsers(result)
      })
    }
}
