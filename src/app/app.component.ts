import { Component, OnInit, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userService: UserService = inject(UserService);
  user = toSignal(this.userService.getUser());

  constructor() {
    effect(() => {
      console.log(this.user());
    });
  }

  ngOnInit(): void {
  }
}
