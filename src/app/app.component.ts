import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { consoleInfo, Company } from './objects/consoleInfo';

export interface Nav {
  cat: string;
  link: string;
  subCat?: Nav[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'RGB Bulletin';
  mobileQuery: MediaQueryList;
  Undefined = undefined;
  consoleInfo: Company[] = consoleInfo;

  // List of consoles applies to all
  nav: Nav[] = [
    {
      cat: 'Display',
      subCat: [
        {
          cat: 'Connection',
          subCat: [
            { cat: 'RF', subCat: [], link: '.'  },
            { cat: 'Composite', subCat: [], link: '.'  },
            { cat: 'S-Video', subCat: [], link: '.'  },
            { cat: 'YPbPr', subCat: [], link: '.'  },
            { cat: 'RGB SCART', subCat: [], link: '.'  },
            { cat: 'VGA', subCat: [], link: '.'  },
            { cat: 'HDMI', subCat: [], link: '.'  },
            { cat: 'Display Port', subCat: [], link: '.'  },
            { cat: 'USB C', subCat: [], link: '.'  }
          ],
          link: '.'
        },
        { cat: 'Switches', subCat: [], link: '.'  },
        { cat: 'Upscalers', subCat: [], link: '.'  },
      ], link: '.'
    }
  ];

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navigateMenu(link) {
    console.log('link:', link);
    this.router.navigate(['/' + link]);
    window.location.reload();
  }

  closeSidenav() {

  }

}
