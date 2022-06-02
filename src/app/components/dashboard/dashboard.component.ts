import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  allUsers!: Array<any>;
  roles: Array<string> = ["admin", "timekeeper", "jury", "wasit"];

  ngOnInit(): void {
    this.authService.GetAllStaff().subscribe(res => {
      console.log(res)
      this.allUsers = res
    })
  }

  sortOrders: string[] = ["Year", "Title", "Author"];
  selectedSortOrder: string = "Sort by...";

  ChangeSortOrder(newSortOrder: string) { 
    this.selectedSortOrder = newSortOrder;
  }
}
