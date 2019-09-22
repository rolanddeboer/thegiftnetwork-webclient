import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  username: string;
  roles: string[];

  constructor() { }
}
