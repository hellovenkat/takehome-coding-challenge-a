import { Component, OnInit } from '@angular/core';
import { GettargetsService } from '../../services/gettargets/gettargets.service';
import { Config } from '../../models/config';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  configs: Config[];
  finConfigForm: FormGroup;
  constructor(private getTargetsService: GettargetsService,
  private location: Location,
  private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getConfigs();
    this.finConfigForm = new FormGroup({
      'fp_rg': new FormControl(),
      'fp_pg': new FormControl(),
      'fp_ig': new FormControl()});
  }
  getConfigs(): void {
    
    this.getTargetsService.getConfigs()
        .subscribe(configs => this.configs = configs);

        setTimeout(() => {
          this.finConfigForm = this.fb.group({
            'fp_rg': [this.configs[1]['fp_rg'], [
              Validators.required,
              Validators.min(0),
              Validators.max(100)
            ]],
            'fp_pg': [this.configs[1]['fp_pg'], [
              Validators.required,
              Validators.min(0),
              Validators.max(100)
            ]],
            'fp_ig': [this.configs[1]['fp_ig'], [
              Validators.required,
              Validators.min(0),
              Validators.max(100)
            ]]
          },{validator: this.sumValidator});
          }, 500);
  }
  sumValidator(group: FormGroup) {
    let sum = 0;
    for(let indiv_group in group.controls) {
      sum += group.get([indiv_group]).value;
    }
    return sum != 100 ? { notValid: true} : null
  }
  saveConfig(){
    this.getTargetsService.editConfig(this.configs[0])
      .subscribe(() => this.goBack());
  }
  saveFinPerformance(){
    this.getTargetsService.editConfig(this.configs[2])
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
  
}
