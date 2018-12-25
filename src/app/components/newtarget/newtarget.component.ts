import { Component, OnInit } from '@angular/core';
import { Target } from '../../models/target';
import { GettargetsService } from '../../services/gettargets/gettargets.service'
import { CommonModule } from '@angular/common';
import { Config } from '../../models/config';
import { IndivConfig } from '../../models/indivconfig';

@Component({
  selector: 'app-newtarget',
  templateUrl: './newtarget.component.html',
  styleUrls: ['./newtarget.component.css']
})
export class NewtargetComponent implements OnInit {
  temp:null;
  targets: Target[];
  configs: Config;
  constructor(private getTargetsService: GettargetsService) { }
  ngOnInit() {
    this.getTargets();
    this.getConfigs();
    setTimeout(() => {
    this.setcolors();      
    }, 500);
  }
  setcolors(){
      this.targets.forEach(target => {
      switch(target.currentstatus){
        case "Research in Progress":target.color = "red";break;
        case "Pending":target.color = "cyan";break;
        case "Approved":target.color = "orange";break;
        case "Declined": target.color ="yellow";break;
        default:target.color = "black";break;
      }
    });
    
  }
  getStyle(item){
    if(item.color){
      var _obj = {
        "font-size": "16px",
        "float": "right",
        "color":"red"
      }
      let arr = this.configs["allColors"];
      var _obDup=new IndivConfig();
      arr.forEach(function(element){
        if(item.currentstatus == element.currentstatus){
          _obDup = element;
        }
      });
      _obj.color = _obDup.color;
      return _obj;
    }
    return {};
  }
  getTargets(): void {
    this.getTargetsService.getTargets()
        .subscribe(targets => this.targets = targets);
  }
  getConfigs(): void {
    this.getTargetsService.getConfigs()
        .subscribe(configs => this.configs = configs);
  }
  delete(target: Target): void {
    this.targets = this.targets.filter(h => h !== target);
    this.getTargetsService.deleteTarget(target).subscribe();
  }

}
