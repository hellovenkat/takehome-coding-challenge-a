import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Target } from '../models/target';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const targets = [
    { id:1,
      name: 'Gravitas IT Company',
      currentstatus: 'Declined',
      keycontacts: [{
        contactname: 'John',
        designation: 'Manager',
        phone: '7329828345'
      },
      {
        contactname: 'Jim',
        designation: 'Manager',
        phone: '8809828878'
      }],
      companyinfo: 'Top IT firm in New York',
      financialperformance: 'OK' },
    { id: 2,
      name: 'ABC Research Company',
      currentstatus: 'Approved',
      keycontacts: [{
        contactname: 'Jason',
        designation: 'CEO',
        phone: '8049457823'
      }],
      companyinfo: 'Potential target with good future returns',
      financialperformance: 'OK' },
    { id: 3,
      name: 'CBS Television Company',
      currentstatus: 'Pending',
      keycontacts: [{
        contactname: 'Brian',
        designation: 'CTO',
        phone: '8034895603'
      }],
      companyinfo: 'A safe investment with average returns',
      financialperformance: 'OK' },
    { id: 4,
      name: 'Manpower Construction Company',
      currentstatus: 'Research in Progress',
      keycontacts: [{
        contactname: 'Kim',
        designation: 'Founder',
        phone: '9087854923'
      }],
      companyinfo: 'A key player in the Construction sector',
      financialperformance: 'OK' }

    ];
    const configs ={
      id:1,
      allColors:[
        {
        currentstatus: 'Approved',
        color: 'Green'
        },
        {
          currentstatus: 'Declined',
          color: 'Red'
          },
          {
            currentstatus: 'Pending',
            color: 'Orange'
            },
            {
              currentstatus: 'Research in Progress',
              color: 'Blue'
              },
      ]
    };
    return {targets,configs};
  }


  genId(targets: Target[]): number {
    return targets.length > 0 ? Math.max(...targets.map(target => target.id)) + 1 : 11;
  }
  constructor() { }
}
