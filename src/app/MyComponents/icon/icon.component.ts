import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() iconName : string ;
 
  constructor(private toastr: ToastrService) { 
    this.iconName = "";
  }
  showToast(){
    return this.toastr.warning('Something Went Wrong', 'Error !',);
  }

  ngOnInit(): void {
  }

}
