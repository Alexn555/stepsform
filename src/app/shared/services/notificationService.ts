import {Injectable} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  defSettings = {
    id: null,
    timeOut: 2000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true
  };

  constructor(private notificationService: NotificationsService) {
  }

  showSuccess(title: string, message: string, id?: string, timeout?: number) {
    this.createDefaultSettings(id, timeout);
    this.notificationService.success(title, message, this.defSettings);
  }

  showError(title: string, message: string, id?: string, timeout?: number) {
    this.createDefaultSettings(id, timeout);
    this.notificationService.error(title, message, this.defSettings);
  }

  createDefaultSettings(id: string, timeout: number) {
    this.defSettings.id = id ? id : null;
    this.defSettings.timeOut = timeout || 2000;
  }

  remove(id: string) {
    this.notificationService.remove(id);
  }

}
