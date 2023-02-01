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
      read: false
    },
    {
      iphoneName: 'iPhone 14 Plus',
      subject: 'Report Results',
      date: 'Released: September 7 2022',
      id: 2,
      read: false
    },
    {
      iphoneName: 'iPhone 14',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      iphoneName: 'iPhone 13',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      iphoneName: 'iPhone 12',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      iphoneName: 'iPhone SE',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
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
