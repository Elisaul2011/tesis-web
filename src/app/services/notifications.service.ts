import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { base_route } from '../../../enviroment';
import { INotificaciones } from '../interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService extends BaseService {

  private route_notification = `${base_route}/notifications`;
  private setNotificationData = signal<INotificaciones[]>([]);
  public getNotificationData = computed<INotificaciones[]>(() => this.setNotificationData());

  getNotifications(idUser: string): void {
    this.httpClient.get<INotificaciones[]>(`${this.route_notification}/${idUser}`).subscribe((result: INotificaciones[]) => {
      this.setNotificationData.set(result);
    })
  }

}
