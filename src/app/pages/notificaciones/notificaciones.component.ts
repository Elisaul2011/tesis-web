import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TableComponent } from '../../components/table/table.component';
import { NotificationsService } from '../../services/notifications.service';
import { IColumns } from '../../interfaces/table.interface';
import { INotificaciones } from '../../interfaces/notification';
import { columnsNotificaciones } from './notificaciones.data';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css',
})
export class NotificacionesComponent extends BaseComponent implements OnInit{ 
  columnsNotificaciones: IColumns<INotificaciones>[] =  columnsNotificaciones;
  dataNotificaciones: any[] = [];
  notificacionesService = inject(NotificationsService);

  constructor(){
    effect(() => {
      this.dataNotificaciones = this.notificacionesService.getNotificationData();
    })
    super();
  }

  ngOnInit(): void {
    this.notificacionesService.getNotifications(this.userToken.idUser.toString());
  }
}
