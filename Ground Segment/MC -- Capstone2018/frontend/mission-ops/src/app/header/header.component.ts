import { Component, OnInit } from '@angular/core';
import { HeaderItem } from 'src/classes/headerItem';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeHeader: HeaderItem;
  headers: HeaderItem[] = [
    new HeaderItem("Queue", "/queue"),
    new HeaderItem("Telecommands", "/telecommands"),
    new HeaderItem("Telecommand Batches", "/telecommandBatches"),
    new HeaderItem("Telemetry", "/telemetry"),
    new HeaderItem("Anomalies", "/anomalies"),
    new HeaderItem("Payload Data", "/payloadData"),
  ];

  isCollapsed = true;

  constructor(private router: Router, public auth: AuthService) {  

    // This allows the active header to be selected even when the page is refreshed
    this.router.events.subscribe(val => {
      if (this.activeHeader == null)
      {
        for (let header of this.headers)
        {
          if (header.route == this.router.url)
          {
            this.activeHeader = header;
            break;
          }
        }
      } else {
        if (this.activeHeader.route != this.router.url)
          {
            this.activeHeader = null;
          }
      }
    });
  }

  ngOnInit() {
  }

  onSelect(newActiveHeader: HeaderItem): void{
    this.activeHeader = newActiveHeader;
  }
}
