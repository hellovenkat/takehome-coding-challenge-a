import { Component, OnInit } from '@angular/core';
import { GettargetsService } from '../../services/gettargets/gettargets.service';
import { Config } from '../../models/config';
import { Location } from '@angular/common';
import { IndivConfig } from '../../models/indivconfig';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  configs: Config;
  constructor(private getTargetsService: GettargetsService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getConfigs();
  }
  getConfigs(): void {
    this.getTargetsService.getConfigs()
        .subscribe(configs => this.configs = configs);
  }
  saveConfig(configs){

      console.log(configs);
      this.getTargetsService.editConfig(configs)
      .subscribe(() => this.goBack());
    }
    goBack(): void {
      this.location.back();
    }
}
