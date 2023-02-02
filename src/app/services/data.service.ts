import { Injectable } from '@angular/core';

export interface Message {
  iphoneName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      iphoneName: 'iPhone 14 Pro Max',
      subject: '6.7 inch display, Longest Battery life, A16 Bionic chip',
      date: 'Released: September 7 2022',
      id: 0,
      read: true
    },
    {
      iphoneName: 'iPhone 14 Pro',
      subject: '6.1 inch, A16 Bionic chip',
      date: 'Released: September 7 2022',
      id: 1,
      read: true
    },
    {
      iphoneName: 'iPhone 14 Plus',
      subject: 'Normal iphone with a bigger screen',
      date: 'Released: September 7 2022',
      id: 2,
      read: true
    },
    {
      iphoneName: 'iPhone 14',
      subject: 'Base iphone',
      date: 'Released: September 7 2022',
      id: 3,
      read: true
    },
    {
      iphoneName: 'iPhone 13',
      subject: 'Almost a year old',
      date: 'Released: September 7 2021',
      id: 4,
      read: true
    },
    {
      iphoneName: 'iPhone 12',
      subject: 'Last call',
      date: 'released: September 7 2020',
      id: 5,
      read: true
    },
    {
      iphoneName: 'iPhone SE',
      subject: 'Version 2',
      date: 'Released: September 7 2022',
      id: 6,
      read: ture
    },

  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
