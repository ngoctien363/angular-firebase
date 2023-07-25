import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  selectedOption: string = 'allCategories';
  menus: Array<any> = [];
  category$: Observable<Category[]>;
  public isVisible = false;
  isLoading = false;
  userName: string | any;
  userInfo!: User;

  constructor(
    categoryService: CategoryService,
    public authService: AuthService,
    public router: Router,
  ) {
    if (this.authService.isLoggedIn) {
      this.userInfo = JSON.parse(localStorage.getItem('user')!);
      this.userName = this.userInfo?.email.split('@gmail.com')[0];
    } else {
      this.userName = "Account"
    }
    this.category$ = categoryService.category$;
    this.category$.subscribe((a) => a);
    this.menus.push(
      {
        title: 'Clothing & Shoes',
        value: 'clothingShoes',
        selected: true,
      },
      {
        title: 'Home & Living',
        value: 'homeLiving',
        selected: false,
      },
      {
        title: 'Wedding & Party',
        value: 'weddingParty',
        selected: false,
      },
      {
        title: 'Toys & Entertainment',
        value: 'toysEntertainment',
        selected: false,
      },
      {
        title: 'Art & Collectibles',
        value: 'artCollectibles',
        selected: false,
      },
      {
        title: 'Craft Supplies & Tools',
        value: 'craftSuppliesTools',
        selected: false,
      }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {}
  
  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleSignIn(acc: string, pass: string) {
    this.isLoading = true;
    this.authService.SignIn(acc, pass).then(() => {
      localStorage.setItem('isAdmin', 'false')
      this.router.navigate(['productions']);
      this.isLoading = false;
      this.handleCancel();
      this.refresh()
    });
  }

  refresh(): void {
    window.location.reload();
}

  handleCancel(): void {
    this.isVisible = false;
  }

  handleClick = (item: any) => {
    this.menus.forEach((category: any) => {
      if (category === item) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    });
  };
}
