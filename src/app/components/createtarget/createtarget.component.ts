import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';

import { Target } from '../../models/target';
import { Contact } from '../../models/contact';
import { GettargetsService } from '../../services/gettargets/gettargets.service'
import { InMemoryDataService } from '../../db/in-memory-data.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-createtarget',
  templateUrl: './createtarget.component.html',
  styleUrls: ['./createtarget.component.css']
})
export class CreatetargetComponent implements OnInit {
  
  targets: Target[];

  user: Target = new Target();
  
  
  addTargetForm: FormGroup;
  keycontacts: FormArray;
  constructor(private fb: FormBuilder,
    private targetService: GettargetsService,
    private inMemoryService: InMemoryDataService,
    private location: Location,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.getTargets();
    this.user.keycontacts = [
      new Contact()
    ];
      this.addTargetForm = this.fb.group({
        'name': [this.user.name, [
          Validators.required
        ]],
        'currentstatus': [this.user.currentstatus, [
          Validators.required
        ]],
        'companyinfo': [this.user.companyinfo, [
          Validators.required
        ]],
        'revenuefactor': [this.user.revenuefactor, [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]],
        'profitfactor': [this.user.profitfactor, [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]],
        'investmentfactor': [this.user.investmentfactor, [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]],
        keycontacts: this.fb.array([ this.createItem() ])
      });
  }
  patch() {
    const control = <FormArray>this.addTargetForm.controls['keycontacts'];
    this.user.keycontacts = control.value ;   
  }
  createItem(): FormGroup {
    return this.fb.group({
      contactname: '',
      designation: '',
      phone: ''
    });
  }
  addItem(): void {
    this.keycontacts = this.addTargetForm.get('keycontacts') as FormArray;
    console.log(this.keycontacts);
    this.keycontacts.push(this.createItem());
  }
  getTargets(): void {
    this.targetService.getTargets()
        .subscribe(targets => this.targets = targets);
  }
  addTarget(target)
  {
    this.patch();
      this.targetService.addTarget(target as Target).subscribe(target => {
        this.targets.push(target);
    });
    this.router.navigateByUrl("/dashboard");
  }
  goBack(): void {
    this.location.back();
  }

}
