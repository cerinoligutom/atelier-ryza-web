import { Component, OnInit, Renderer2 } from '@angular/core';
import { SiteThemes } from '@ryza/core/enums';

@Component({
  selector: 'ryza-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  options = Object.values(SiteThemes);
  activeIndex = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, this.options[0]);
  }

  themeSelected(i: number) {
    this.renderer.removeClass(document.body, this.options[this.activeIndex]);
    this.renderer.addClass(document.body, this.options[i]);
    this.activeIndex = i;
  }
}
