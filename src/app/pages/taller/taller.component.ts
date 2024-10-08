import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsTaller, configTableTaller, dataFormTaller, formularioTaller, } from './taller.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, IConfigTable, ISendDataTable } from '../../interfaces/table.interface';

import { BodyCreateTaller, BodyUpdateTaller, ITaller } from '../../interfaces/taller';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { TallerService } from '../../services/taller.service';
import { UsersService } from '../../services/users.service';

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
  columnsTaller: IColumns<ITaller>[] = columnsTaller;
  configTableTaller: IConfigTable = configTableTaller;
  dataTaller: ITaller[] = [];

  tallerService = inject(TallerService);
  userService = inject(UsersService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataTaller = this.tallerService.getTallerData();

      const findMadeBy = formularioTaller.dataForm.find(form => form.formControl == 'madeBy');
      if(findMadeBy){
        findMadeBy.option = this.userService.getUserData().map(user => {
          return {
            label: `${user.nameUser} ${user.lastnameUser}`,
            value: user.idUser
          }
        })
      }
    })
  }

  ngOnInit(): void {
    this.tallerService.getTaller();
    this.userService.getUsersByRol('4');
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
    formularioTaller.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      panelClass: 'stylesDialog',
      data: formularioTaller,
    });

    dialogRef.afterClosed().subscribe((result:BodyCreateTaller ) => {
      this.tallerService.postTaller(result)
    })
  }

  editDataDialog(data: ITaller): void {
    formularioTaller.dataForm.map(form => {
      const findByName = formularioTaller.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof ITaller]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioTaller,
    });

    dialogRef.afterClosed().subscribe((result: BodyUpdateTaller) => {
      if(result){
        result.idTaller = data.idTaller;
        result.inventarioId = data.inventarioId;
        this.tallerService.putTaller(result)
      }
    })
  }
}
