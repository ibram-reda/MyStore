import { Component, OnInit } from '@angular/core';

const DARK_MODE = "DarkMode"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyStore';
  isDarkModeActive = true;

  ngOnInit(): void {
    const UserPreferedMode = localStorage.getItem(DARK_MODE);
    if(UserPreferedMode === null){
      localStorage.setItem(DARK_MODE,"true");
      return;
    }
    this.isDarkModeActive = UserPreferedMode==="true";
  }

  onDarkModeChanged(darkMode:boolean){
    this.isDarkModeActive = darkMode;
    localStorage.setItem(DARK_MODE,`${darkMode}`);
  }

}
