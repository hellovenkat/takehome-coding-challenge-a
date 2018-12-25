import { Component, OnInit, Input  } from '@angular/core';
import { Target } from '../../models/target';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';

import { GettargetsService }  from '../../services/gettargets/gettargets.service';

@Component({
  selector: 'app-target-detail',
  templateUrl: './target-detail.component.html',
  styleUrls: ['./target-detail.component.css']
})
export class TargetDetailComponent implements OnInit {
  target: Target;
  constructor(
  private route: ActivatedRoute,
  private targetService: GettargetsService,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.getTarget();
  }
  
  getTarget(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.targetService.getTarget(id)
      .subscribe(target => this.target = target);
  }

  saveTarget(): void {
    this.targetService.updateTarget(this.target)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  addContactToTarget(): void{
    this.target.keycontacts.push();
  }
  deleteContactFromTarget(contact): void{
    const id = typeof contact === 'number' ? contact : contact.id; 
    alert(id);
    if (id !== -1) {
      this.target.keycontacts.splice(id-1, 1);
    }  
  }
}
