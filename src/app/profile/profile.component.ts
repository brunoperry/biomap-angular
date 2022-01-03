import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:UserModel = new UserModel(
    -1,
    '---',
    '---',
    [-1],
    {}
  );
  sitesData:any[] = [];
  isEditable:boolean = false;
  initialized:boolean = false;

  constructor(private userService:UsersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        const data = this.userService.getUser(params['index']);
        if(data) {
          this.userData = data;
          this.isEditable = this.userData.id === this.userService.currentUser.id;
          
          this.sitesData = this.userService.getUserSites(this.userData.sites)
        }
      }
    })
    
    this.initialized = true;
  }
  onChangeAvatarClick() :void {
    console.log('change avatar');
    
  }
}
