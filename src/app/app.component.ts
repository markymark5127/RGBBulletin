import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

export interface Nav {
  cat: string;
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

  // List of consoles applies to all
  consoles: Nav[] = [
    {
      cat: 'Atari',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Atari 2600' },
            { cat: 'Atari 5200' },
            { cat: 'Atari 7800' },
            { cat: 'Jaguar'}
          ]
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Lynx' }
          ]
        },
      ]
    },
    {
      cat: 'Microsoft',
      subCat: [
        { cat: 'Xbox' },
        { cat: 'Xbox 360' },
        { cat: 'Xbox One' },
        { cat: 'Project Scarlett' }
      ]
    },
    {
      cat: 'NEC'
    },
    {
      cat: 'Nintendo',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'NES' },
            { cat: 'Super Nintendo'},
            { cat: 'Nintendo 64' },
            { cat: 'Gamecube' },
            { cat: 'Wii' },
            { cat: 'Wii U' },
            { cat: 'Switch' }
          ]
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Gameboy' },
            { cat: 'Gameboy Color' },
            { cat: 'Virtual Boy' },
            { cat: 'Gameboy Advanced' },
            { cat: 'Nintendo DS' },
            { cat: 'Nintendo 3DS' },
            { cat: 'Switch' }
          ]
        }
      ]
    },
    {
      cat: 'Phillips'
    },
    {
      cat: 'Sega',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'SG 1000' },
            { cat: 'Master System' },
            { cat: 'Genesis/MegaDrive' },
            { cat: 'Saturn' },
            { cat: 'Dreamcast' }
          ]
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'Game Gear' },
            { cat: 'Nomad' }
          ]
        }
      ]
    },
    {
      cat: 'Sony',
      subCat: [
        {
          cat: 'Home Consoles',
          subCat: [
            { cat: 'Playstation' },
            { cat: 'Playstation 2' },
            { cat: 'Playstation 3' },
            { cat: 'Playstation 4' }
          ]
        },
        {
          cat: 'Handheld Consoles',
          subCat: [
            { cat: 'PSP' },
            { cat: 'Vita' }
          ]
        }
      ]

    }

  ];

  nav: Nav[] = [
    {
      cat: 'Console Info',
      subCat: this.consoles
    },
    {
      cat: 'Unfinished Games',
      subCat: this.consoles
    },
    {
      cat: 'Display',
      subCat: [
        {
          cat: 'Connection',
          subCat: [
            { cat: 'RF' },
            { cat: 'Composite' },
            { cat: 'S-Video' },
            { cat: 'YPbPr' },
            { cat: 'RGB SCART' },
            { cat: 'VGA' },
            { cat: 'HDMI' },
            { cat: 'Display Port'}
          ]
        },
        { cat: 'Switches' },
        { cat: 'Upscalers' },

      ]
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

}
