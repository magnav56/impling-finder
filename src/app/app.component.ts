import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly http: HttpClient) {}
  public implings = [];
  public loading = false;

  ngOnInit() {}

  public start() {
    setInterval(() => {
      this.test();
    }, 4000);
  }

  public async test() {
    if (this.loading) return;
    this.loading = true;
    const data = await this.http
      .get<any>(
        'https://puos0bfgxc2lno5-implingdb.adb.us-phoenix-1.oraclecloudapps.com/ords/impling/implingdev/dev?limit=20'
      )
      .toPromise();

    this.loading = false;
    this.implings = data.items;
  }

  public getImplingName(id) {
    switch (id) {
      case 1635:
        return 'Baby';
      case 1636:
        return 'Young';
      case 1637:
        return 'Gourmet';
      case 1638:
        return 'Earth';
      case 1639:
        return 'Essence';
      case 1640:
        return 'Eclectic';
      case 1641:
        return 'Nature';
      case 1642:
        return 'Magpie';
      case 1643:
        return 'Ninja';
      case 1644:
        return 'Dragon';
      case 8741:
        return 'Crystal';
    }
    return id;
  }
}
