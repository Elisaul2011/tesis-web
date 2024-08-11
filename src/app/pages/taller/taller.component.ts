import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { columnsTaller, dataFormTaller, formularioTaller } from './taller.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';

import { BodyCreateTaller, BodyUpdateTaller, ITaller } from '../../interfaces/taller';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { TallerService } from '../../services/taller.service';

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
  dataTaller: ITaller[] = [];

  tallerService = inject(TallerService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataTaller = this.tallerService.getTallerData();
    })  
  }

  ngOnInit(): void {
    this.tallerService.getTaller();
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
        this.tallerService.putTaller(result)
      }
    })
  }
}
