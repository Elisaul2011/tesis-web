import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { IColumns, ISendDataTable } from '../../interfaces/table.interface';
import { columnsZonas, formularioZona } from './zonas.data';
import { TableComponent } from '../../components/table/table.component';
import { BodyCreateZona, BodyUpdateZona, IZona } from '../../interfaces/inventario';
import { ZonasService } from '../../services/zonas.service';
import { almacenService } from '../../services/almacen.service';
import { IAlmacenes } from '../../interfaces/almacenes';

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './zonas.component.html',
  styleUrl: './zonas.component.css',
})
export class ZonasComponent implements OnInit {
  columnsZonas: IColumns<IZona>[] = columnsZonas;
  dataZonas: IZona[] = [];

  zonasServices = inject(ZonasService);
  almacenServices = inject(almacenService);
  dialog = inject(MatDialog);

  constructor(){
    effect(() => {
      this.dataZonas = this.zonasServices.getZonaData();

      
      const findAlmacenes = formularioZona.dataForm.find(form => form.formControl == 'almacenId');
      if (findAlmacenes) {
        findAlmacenes.option = this.almacenServices.getAlmacenesData().map((alm: IAlmacenes) => {
          return {
            label: alm.nombre,
            value: alm.idAlmacenes
          }
        });
      }
    })
  }

  ngOnInit(): void {
    this.zonasServices.getZonas();
    this.almacenServices.getAlmacenes();
  }

  defectColumnAction(dataComponent: ISendDataTable): void {
    if(dataComponent.action == 'add'){
      this.openDialog();
    }
    if(dataComponent.action == 'edit'){
      this.editDataDialog(dataComponent.data);
    }
    if(dataComponent.action == 'delete'){
      this.deleteData(dataComponent.data);
    }
  }

  openDialog(): void {
    formularioZona.dataForm.map(form => form.value = '');

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioZona,
    });

    dialogRef.afterClosed().subscribe((result:BodyCreateZona ) => {
      if(result){
        this.zonasServices.postZonas(result)
      }
    })
  }

  editDataDialog(data: IZona): void {
    formularioZona.dataForm.map(form => {
      const findByName = formularioZona.dataForm.find(loquesea => loquesea.formControl == form.formControl);
      if(findByName){
        findByName.value = data[form.formControl as keyof IZona]
      }
    })

    const dialogRef = this.dialog.open(FormularioComponent, {
      data: formularioZona,
    });

    dialogRef.afterClosed().subscribe((result: BodyUpdateZona) => {
      if(result){
        result.idZona = data.idZona;
        this.zonasServices.putZonas(result)
      }
    })
  }

  deleteData(data: IZona): void {
    Swal.fire({
      title: "Seguro que quieres eliminar el almacen?",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      denyButtonText: `Cancelar`,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.zonasServices.deleteZonas(data.idZona);
      }
    });
  }
}
