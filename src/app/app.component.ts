import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

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

  // List of consoles applies to all
  consoles: Nav[] = [
    {
      cat: '3DO',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: '3DO', subCat: [], link: '.' }
          ],
          link: '.',
        }
      ],
      link: '.'
    },
    {
      cat: 'Atari',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Atari 2600', subCat: [], link: '.' },
            { cat: 'Atari 5200', subCat: [], link: '.'  },
            { cat: 'Atari 7800', subCat: [], link: '.'  },
            { cat: 'Jaguar', subCat: [], link: '.' }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Lynx', subCat: [], link: '.'  }
          ],
          link: '.'
        },
      ],
      link: '.'
    },
    {
      cat: 'Microsoft',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Xbox', subCat: [], link: '.'  },
            { cat: 'Xbox 360', subCat: [], link: '.'  },
            { cat: 'Xbox One', subCat: [], link: '.'  },
            { cat: 'Project Scarlett', subCat: [], link: '.'  }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'NEC',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'TurboGrafx 16/PC Engine', subCat: [], link: '.' },
            { cat: 'PC-FX', subCat: [], link: '.' }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'TurboExpress', subCat: [], link: '.' }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'Neo Geo',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'AES', subCat: [], link: '.' },
            { cat: 'CD', subCat: [], link: '.' }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Pocket Color', subCat: [], link: '.' }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'Nintendo',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Nntendo Entertainment System', subCat: [], link: '.'  },
            { cat: 'Super Nintendo', subCat: [], link: '.' },
            { cat: 'Nintendo 64', subCat: [], link: '.'  },
            { cat: 'Gamecube', subCat: [], link: '.'  },
            { cat: 'Wii', subCat: [], link: '.'  },
            { cat: 'Wii U', subCat: [], link: '.'  },
            { cat: 'Switch', subCat: [], link: '.'  }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Gameboy', subCat: [], link: '.'  },
            { cat: 'Gameboy Color', subCat: [], link: '.'  },
            { cat: 'Virtual Boy', subCat: [], link: '.'  },
            { cat: 'Gameboy Advanced', subCat: [], link: '.'  },
            { cat: 'Nintendo DS', subCat: [], link: '.'  },
            { cat: 'Nintendo 3DS', subCat: [], link: '.'  },
            { cat: 'Switch', subCat: [], link: '.'  }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'Phillips',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'CDI', subCat: [], link: '.' }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'Sega',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'SG 1000', subCat: [], link: '.'  },
            { cat: 'Master System', subCat: [], link: '.'  },
            { cat: 'Genesis/MegaDrive', subCat: [], link: '.'  },
            { cat: 'Saturn', subCat: [], link: '.'  },
            { cat: 'Dreamcast', subCat: [], link: '.'  }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Game Gear', subCat: [], link: '.'  },
            { cat: 'Nomad', subCat: [], link: '.'  }
          ],
          link: '.'
        }
      ],
      link: '.'
    },
    {
      cat: 'Sony',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Playstation', subCat: [], link: '.'  },
            { cat: 'Playstation 2', subCat: [], link: '.'  },
            { cat: 'Playstation 3', subCat: [], link: '.'  },
            { cat: 'Playstation 4', subCat: [], link: '.'  },
            { cat: 'Playstation 5', subCat: [], link: '.'  }
          ],
          link: '.'
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'PSP', subCat: [], link: '.'  },
            { cat: 'Vita', subCat: [], link: '.'  }
          ],
          link: '.'
        }
      ],
      link: '.'
    }
  ];

  nav: Nav[] = [
    {
      cat: 'Console Info',
      subCat: this.consoles,
      link: '.'
    },
    {
      cat: 'Unreleased',
      subCat: this.consoles,
      link: '.'
    },
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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSidenav() {

  }

}
