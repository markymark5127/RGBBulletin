export enum ConsoleType {
  HANDHELD = 'handheld',
  HOME = 'home'
}
export interface Info {
  intro: string[];
  videoTLDR: string[];
  video: string[];
  videoModern: string[];
  addOn?: string[];
  modernVer?: string[];
  accesories?: string[];
}
export interface Console {
  id: string;
  name: string;
  type: ConsoleType;
  logo: string;
  photo: string;
  link: string;
  info?: Info;

}
export interface Company {
  id: string;
  name: string;
  logo: string;
  homeConsoles: Console[];
  handheldConsoles: Console[];
}

export const consoleInfo: Company[] = [
  {
    id: '3do',
    name: '3DO',
    logo: 'assets/company/3do.png',
    homeConsoles: [
      {
        id: '3do',
        name: '3DO',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/3do.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/3do/home/3do',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: []
  },
  {
    id: 'atari',
    name: 'Atari',
    logo: 'assets/company/atari.png',
    homeConsoles: [
      {
        id: '2600',
        name: 'Atari 2600/VCS',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/2600.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/atari/home/2600',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: '5200',
        name: 'Atari 5200',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/5200.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/atari/home/5200',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: '7800',
        name: 'Atari 7800',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/7800.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/atari/home/7800',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'jaguar',
        name: 'Jaguar',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/jaguar.jpg',
        photo: 'assets/console/pic/.jpg',
        link: '/console/atari/home/jaguar',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: [
      {
        id: 'lynx',
        name: 'Lynx',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/lynx.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/atari/handheld/lynx',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'assets/company/microsoft.png',
    homeConsoles: [
      {
        id: 'xbox',
        name: 'Xbox',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/xbox.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/microsoft/home/xbox',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'xbox360',
        name: 'Xbox 360',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/xbox360.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/microsoft/home/xbox360',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'xboxone',
        name: 'Xbox One',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/xboxone.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/microsoft/home/xboxone',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'scarlett',
        name: 'Project Scarlett',
        type: ConsoleType.HOME,
        logo: 'assets/console/.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/microsoft/home/scarlett',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: []
  },
  {
    id: 'nec',
    name: 'NEC',
    logo: 'assets/company/nec.png',
    homeConsoles: [
      {
        id: 'tg16',
        name: 'TurboGrafx 16/PC Engine',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/tg16.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nec/home/tg16',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'pcfx',
        name: 'PC-FX',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/pcfx.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nec/home/pcfx',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }],
    handheldConsoles: [
      {
        id: 'turboexpress',
        name: 'TurboExpress',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/turboexpress.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nec/handheld/turboexpress',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  },
  {
    id: 'neogeo',
    name: 'Neo Geo',
    logo: 'assets/company/neogeo.png',
    homeConsoles: [
      {
        id: 'aes',
        name: 'AES',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/aes.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/neogeo/home/aes',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'cd',
        name: 'CD',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/cd.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/neogeo/home/cd',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: [
      {
        id: 'pocket',
        name: 'Pocket',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/pocketcolor.gif',
        photo: 'assets/console/pic/.jpg',
        link: '/console/neogeo/handheld/pocket',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    logo: 'assets/company/nintendo.png',
    homeConsoles: [
      {
        id: 'nes',
        name: 'Nntendo Entertainment System/Famicom',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/nes.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/nes',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'snes',
        name: 'Super Nintendo/Super Famicom',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/snes.png',
        photo: 'assets/console/pic/snes.jpg',
        link: '/console/nintendo/home/snes',
        info: {
          intro: [
            'The North American version of this console called the Super Nintendo is denoted by the more square shape and the large purple buttons has two major console revisions,dubbed the "Fat" console revision was the first release and the "Junior" or "Mini" for the later smaller models of the console.',
            'The PAL and Japanese versions of the console (named Super Famicom and Super Nintendo respectively) are essentially the same. They also had two major notable revisions these are also in a "Fat" and "Junior" model. These homeConsoles have a darker gray color with a multicolor logo.',
            'Notable differences in the two are the controllers. The North American console stock controllers have two concave face buttons and two convex but often came with a longer cable the PAL/Japan homeConsoles face buttons were all convex. Another major difference is the casing on the North American console is large enough to fit the Japanese cartridges (provided you remov the plastic region protect notches) the Japanese Console you will need an adapter.'
          ],
          videoTLDR: [ 'usually the best video output is 240p or in rare instances 480i rendering at 256 x 224/256 x 239 using RGB (usually through SCART or JP21).' ],
          video: [
            'With the original "Fat" models all standard video outputs are possible Composite, S-Video, and RGB but there are four revisions of these fat model Super Nintendo\'s the first model is usually regarded as the worst looking revision of the console. The later revisions with sharper images have been dubbed "1Chip" homeConsoles with the third revision of the 1Chips is considered the sharpest of the other 1Chip units. It does lack C-Sync compatability but, Sync on Luma is compatable and C-Sync can be restored through mods. The 1Chip homeConsoles are usually denoted with a serial number begining with "un3", to tell for sure look at the inside of the console to see if there is a 1-Chip marking on the motherboard.',
            'The Super Nintendo Junior has what is considered the sharpest video quality but, does not support S-Video or RGB without mods.'
          ],
          videoModern: [
            'When displaying on a modern TV utilizing a scaler for designed for 240p such as the OSSC, XRGB-Mini Framemeister, or RetroTINK-2X in conjunction with good quality RGB SCART C-SYNC cables (Insurection industries or Retro Gaming Cables) is usually the best solution unless your console was previously specified as irregular. Beware the Hyperkin/Pound HDMI cables do not scale properly if you would like a plug and play HDMI solution Retro Gaming Cables RAD2X Cables are your best bet.'
          ],
          addOn: [
            'The Super Nintendo has two noatble Add On\'s. The first is the "Super Gameboy", this was a cartridge that allowed for Gameboy and Gameboy Color game play on the TV through hardware emulation. There were two versions of the Super Gameboy, the original version was released world wide but, had an issue that runs the games 2.4% faster than a real Gameboy. The Super Gameboy 2, only released in Japan, fixed the speed issue and added a link cable port.',
            'The second Super Nintendo add on is the "Satellaview BS-X" this was an early version of online play, it allowed for a downloading of games and online play in tandem with a radio broadcast. There were some games that were only available through download and now are largely hunted for preservation',
            'The "Play Station" was a add on designed for the Super Nintendo that was never released but, has been found! This was a CD add on for the console that was designed by Sony. There are emulators that allow you to try out the console'
          ],
          accesories: [],
          modernVer: [
            'There are many software emulators that play the Super Nintendo games and many "Software Emulation Boxes" tha allow you to play with real cartridges a hardware emulation solution that is regarded as the best way to play Super Nintendo with the most accuracy is the "Analog Super NT" but the best software emulation without a PC is from Nintendo with their "Super NES Classic" which includes the unrelased "Starfox 2"'
          ],
        }
      },
      {
        id: 'n64',
        name: 'Nintendo 64',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/n64.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/n64',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'gc',
        name: 'Gamecube',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/gc.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/gc',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'wii',
        name: 'Wii',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/wii.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/wii',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'wiiu',
        name: 'Wii U',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/wiiu.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/wiiu',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'switch',
        name: 'Switch',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/switch.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/home/switch',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: [
      {
        id: 'gb',
        name: 'Gameboy',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/gb.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/gb',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'gbc',
        name: 'Gameboy Color',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/gbc.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/gbc',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'vb',
        name: 'Virtual Boy',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/vb.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/vb',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'gba',
        name: 'Gameboy Advanced',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/gba.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/gba',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'nds',
        name: 'Nintendo DS',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/nds.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/nds',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: '3ds',
        name: 'Nintendo 3DS',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/3ds.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/3ds',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'switch',
        name: 'Switch',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/switch.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/nintendo/handheld/switch',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  },
  {
    id: 'phillips',
    name: 'Phillips',
    logo: 'assets/company/phillips.png',
    homeConsoles: [
      {
        id: 'cdi',
        name: 'CDI',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/cdi.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/phillips/home/cdi',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: [],
  },
  {
    id: 'sega',
    name: 'Sega',
    logo: 'assets/company/sega.png',
      homeConsoles: [
        {
          id: 'sg1000',
          name: 'SG 1000',
          type: ConsoleType.HOME,
          logo: 'assets/console/logo/sg1000.png',
          photo: 'assets/console/pic/.jpg',
          link: '/console/sega/home/sg1000',
          info: {
            intro: [],
            videoTLDR: [],
            video: [],
            videoModern: [],
            addOn: [],
            modernVer: [],
            accesories: []
          }
        },
        {
          id: 'ms',
          name: 'Master System/Mark III',
          type: ConsoleType.HOME,
          logo: 'assets/console/logo/ms.png',
          photo: 'assets/console/pic/sms.jpg',
          link: '/console/sega/home/ms',
          info: {
            intro: [
              'Was released as the "Mark III" in Japan then released as the "Master System" in the US and PAL then re-released in Japan as the "Master System". There are three major revisions of the console the "Sega Mark III", the "Master System Powerbase", and the "Master System II" with the "Powerbase" having minor revions that are easiest to tell by which built in game is playable. This console supports card and cartridge based games, although the "Master System II" itteration of the console does not support the card based games or the "3D-Glasses". You can also, play both the cartridge and card games (and use the 3D-Glasses) on the Sega Genesis with the "Powerbase Converter".'
            ],
            videoTLDR: [ 'RGB C-Sync, there is no s-video without modding.' ],
            video: [
              'The Master System supports RF, Composite, and RGB. The RGB signal can be modified to become an S-Video sollution. The Master System II only supports RF without heavy modding.',
              'Thankfully the Sega Master System is pretty easy when it comes to video output.'
            ],
            videoModern: [],
            addOn: [],
            modernVer: [],
            accesories: [
              '3D-Glasses: Sega released "3D-Glasses" but these are only compatable with the "Powerbase" model of the Master System.',
              'Light Phaser: Sega also, released a light gun called the "Light Phaser" but is only usable ion a CRT TV.',
              'FM Sound Unit: The "FM Sound Unit" allowed for higher audio quality from the console it was only build for the "Mark III" but through modification and or ports (depending on the version of console) this FM sound can be restored on any region console.'

            ]
          }
        },
        {
          id: 'genesis',
          name: 'Genesis/MegaDrive',
          type: ConsoleType.HOME,
          logo: 'assets/console/logo/genesis.png',
          photo: 'assets/console/pic/genesis.jpg',
          link: '/console/sega/home/genesis',
          info: {
            intro: [],
            videoTLDR: [],
            video: [],
            videoModern: [],
            addOn: [],
            modernVer: [],
            accesories: []
          }
        },
        {
          id: 'saturn',
          name: 'Saturn',
          type: ConsoleType.HOME,
          logo: 'assets/console/logo/saturn.png',
          photo: 'assets/console/pic/.jpg',
          link: '/console/sega/home/saturn',
          info: {
            intro: [],
            videoTLDR: [],
            video: [],
            videoModern: [],
            addOn: [],
            modernVer: [],
            accesories: []
          }
        },
        {
          id: 'dreamcast',
          name: 'Dreamcast',
          type: ConsoleType.HOME,
          logo: 'assets/console/logo/dreamcast.png',
          photo: 'assets/console/pic/.jpg',
          link: '/console/sega/home/dreamcast',
          info: {
            intro: [],
            videoTLDR: [],
            video: [],
            videoModern: [],
            addOn: [],
            modernVer: [],
            accesories: []
          }
        }
      ],
    handheldConsoles: [
      {
        id: 'gg',
        name: 'Game Gear',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/gg.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sega/handheld/gg',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'nomad',
        name: 'Nomad',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sega/handheld/nomad',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: 'assets/company/sony.png',
    homeConsoles: [
      {
        id: 'ps1',
        name: 'Playstation',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/ps1.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/home/ps1',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'ps2',
        name: 'Playstation 2',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/ps2.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/home/ps2',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'ps3',
        name: 'Playstation 3',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/ps3.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/home/ps3',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'ps4',
        name: 'Playstation 4',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/ps4.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/home/ps4',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'ps5',
        name: 'Playstation 5',
        type: ConsoleType.HOME,
        logo: 'assets/console/logo/.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/home/ps5',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ],
    handheldConsoles: [
      {
        id: 'psp',
        name: 'PSP',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/psp.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/handheld/psp',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      },
      {
        id: 'vita',
        name: 'Vita',
        type: ConsoleType.HANDHELD,
        logo: 'assets/console/logo/vita.png',
        photo: 'assets/console/pic/.jpg',
        link: '/console/sony/handheld/vita',
        info: {
          intro: [],
          videoTLDR: [],
          video: [],
          videoModern: [],
          addOn: [],
          modernVer: [],
          accesories: []
        }
      }
    ]
  }
];
