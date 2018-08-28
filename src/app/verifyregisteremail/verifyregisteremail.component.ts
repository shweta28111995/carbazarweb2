import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
selector: 'app-verifyregisteremail',
templateUrl: './verifyregisteremail.component.html',
styleUrls: ['./verifyregisteremail.component.css']
})
export class VerifyregisteremailComponent implements OnInit {
email = {};
status = {};
constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

ngOnInit() {
this.email = this.route.snapshot.paramMap.get('email');
this.userService.verfyUserEmail(this.email)
.subscribe((res: any) => {
debugger;
this.status = res.status;
console.log(res);
});

}

}
