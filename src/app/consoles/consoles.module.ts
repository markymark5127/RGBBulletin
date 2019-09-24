import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolesRoutingModule } from './consoles-routing.module';
import { ConsolesComponent } from './consoles.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { SegaComponent } from './sega/sega.component';
import { NecComponent } from './nec/nec.component';
import { AtariComponent } from './atari/atari.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { PhillipsComponent } from './phillips/phillips.component';
import { SonyComponent } from './sony/sony.component';
import { Atari2600Component } from './atari/atari2600/atari2600.component';
import { Atari5200Component } from './atari/atari5200/atari5200.component';
import { Atari7800Component } from './atari/atari7800/atari7800.component';
import { JaguarComponent } from './atari/jaguar/jaguar.component';
import { LynxComponent } from './atari/lynx/lynx.component';
import { XboxComponent } from './microsoft/xbox/xbox.component';
import { Xbox360Component } from './microsoft/xbox360/xbox360.component';
import { XboxoneComponent } from './microsoft/xboxone/xboxone.component';
import { ProjectscarlettComponent } from './microsoft/projectscarlett/projectscarlett.component';
import { NesComponent } from './nintendo/nes/nes.component';
import { SnesComponent } from './nintendo/snes/snes.component';
import { N64Component } from './nintendo/n64/n64.component';
import { GamecubeComponent } from './nintendo/gamecube/gamecube.component';
import { WiiComponent } from './nintendo/wii/wii.component';
import { WiiuComponent } from './nintendo/wiiu/wiiu.component';
import { SwitchComponent } from './nintendo/switch/switch.component';
import { GameboyComponent } from './nintendo/gameboy/gameboy.component';
import { GameboycolorComponent } from './nintendo/gameboycolor/gameboycolor.component';
import { VirtualboyComponent } from './nintendo/virtualboy/virtualboy.component';
import { GbadvancedComponent } from './nintendo/gbadvanced/gbadvanced.component';
import { DsComponent } from './nintendo/ds/ds.component';
import { N3dsComponent } from './nintendo/n3ds/n3ds.component';
import { Sg1000Component } from './sega/sg1000/sg1000.component';
import { MastersystemComponent } from './sega/mastersystem/mastersystem.component';
import { GenesisComponent } from './sega/genesis/genesis.component';
import { SaturnComponent } from './sega/saturn/saturn.component';
import { DreamcastComponent } from './sega/dreamcast/dreamcast.component';
import { GamegearComponent } from './sega/gamegear/gamegear.component';
import { NomadComponent } from './sega/nomad/nomad.component';
import { Ps1Component } from './sony/ps1/ps1.component';
import { Ps2Component } from './sony/ps2/ps2.component';
import { Ps3Component } from './sony/ps3/ps3.component';
import { Ps4Component } from './sony/ps4/ps4.component';
import { Ps5Component } from './sony/ps5/ps5.component';
import { PspComponent } from './sony/psp/psp.component';
import { VitaComponent } from './sony/vita/vita.component';



@NgModule({
  declarations: [
    ConsolesComponent,
    NintendoComponent,
    SegaComponent,
    NecComponent,
    AtariComponent,
    MicrosoftComponent,
    PhillipsComponent,
    SonyComponent,
    Atari2600Component,
    Atari5200Component,
    Atari7800Component,
    JaguarComponent,
    LynxComponent,
    XboxComponent,
    Xbox360Component,
    XboxoneComponent,
    ProjectscarlettComponent,
    NesComponent,
    SnesComponent,
    N64Component,
    GamecubeComponent,
    WiiComponent,
    WiiuComponent,
    SwitchComponent,
    GameboyComponent,
    GameboycolorComponent,
    VirtualboyComponent,
    GbadvancedComponent,
    DsComponent,
    N3dsComponent,
    Sg1000Component,
    MastersystemComponent,
    GenesisComponent,
    SaturnComponent,
    DreamcastComponent,
    GamegearComponent,
    NomadComponent,
    Ps1Component,
    Ps2Component,
    Ps3Component,
    Ps4Component,
    Ps5Component,
    PspComponent,
    VitaComponent
  ],
  imports: [
    CommonModule,
    ConsolesRoutingModule,
  ]
})
export class ConsolesModule { }
