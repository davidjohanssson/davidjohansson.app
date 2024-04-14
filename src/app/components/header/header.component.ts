import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatDialogModule,
    MatRippleModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private dialog = inject(MatDialog);
  public themeService = inject(ThemeService);
  public faSun = faSun;
  public faMoon = faMoon;
  //public coverUrl = 'assets/images/cover.jpg';
  public dayUrl = 'assets/images/day.webp';
  public nightUrl = 'assets/images/night.webp';
  public avatarUrl = 'assets/images/me.jpg';

  public openAvatarDialog() {
    this.dialog.open(AvatarDialogComponent, {
      data: {
        avatarUrl: this.avatarUrl
      }
    });
  }
}
