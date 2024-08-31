import { Component, Input, type OnInit } from "@angular/core";

@Component({
  selector: "app-icon-svg",
  standalone: true,
  imports: [],
  templateUrl: "./icon-svg.component.html",
  styleUrl: "./icon-svg.component.scss",
})
export class IconSvgComponent implements OnInit {
  private PATH: string = "assets/icons/icons.svg#";
  public sizeClass!: string;
  public URL_PATH!: string;
  @Input() iconID!: string;
  @Input() iconSize: ICON_SIZE = "sm";

  ngOnInit(): void {
    this.URL_PATH = `${this.PATH}${this.iconID}`;
    this.sizeClass = this.iconsSizes[this.iconSize] || this.iconsSizes["sm"];
  }

  private iconsSizes: Record<ICON_SIZE, string> = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  };
}

type ICON_SIZE = "xs" | "sm" | "md" | "lg";
