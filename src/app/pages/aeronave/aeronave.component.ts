import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { columnsAeronave, formularioAeronave } from './aeronave.data';
import { TableComponent } from '../../components/table/table.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';


import { FormularioComponent } from '../../components/formulario/formulario.component';
import { BodyCreateAeronave, BodyUpdateAeronave, IAeronave } from '../../interfaces/aeronave';
import { MatButtonModule } from '@angular/material/button';
import { aeronaveService } from '../../services/aeronave.service';

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
    columnsAeronave: IColumns<IAeronave>[] = columnsAeronave;
    dataAeronave: IAeronave[] = [];

    aeronaveService = inject(aeronaveService);
    dialog = inject(MatDialog);

    constructor(){
      effect(() => {
        this.dataAeronave = this.aeronaveService.getAeronaveData();
      })  
    }

    ngOnInit(): void {
      this.aeronaveService.getAeronaves();
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
        panelClass: 'stylesDialog',
        data: formularioAeronave,
      });
  
      dialogRef.afterClosed().subscribe((result:BodyCreateAeronave ) => {
        this.aeronaveService.postAeronaves(result)
      })
    }
  
    editDataDialog(data: IAeronave): void {
      formularioAeronave.dataForm.map(form => {
        const findByName = formularioAeronave.dataForm.find(loquesea => loquesea.formControl == form.formControl);
        if(findByName){
          findByName.value = data[form.formControl as keyof IAeronave]
        }
      })
  
      const dialogRef = this.dialog.open(FormularioComponent, {
        data: formularioAeronave,
      });
  
      dialogRef.afterClosed().subscribe((result: BodyUpdateAeronave) => {
        if(result){
          result.idAeronave = data.idAeronave;
          this.aeronaveService.putAeronaves(result)
        }
      })
    }


}

