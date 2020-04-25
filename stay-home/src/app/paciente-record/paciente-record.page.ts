import { Component, OnInit } from '@angular/core';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';

import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';


import { Plugins } from "@capacitor/core"
import { RecordingData, GenericResponse } from 'capacitor-voice-recorder'
import { timer } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-paciente-record',
  templateUrl: './paciente-record.page.html',
  styleUrls: ['./paciente-record.page.scss'],
})
export class PacienteRecordPage implements OnInit {

  public progress = 0;
  public buffer = 0.3;
  public timing = 0;
  public isVisibleRecording = false;
async increaseProgress(){
  await this.delay(1000);
  this.progress = this.progress + 0.05; 
  if (this.progress != 0.3){
    this.increaseProgress();

  }else{
    return 0;
  }
}

  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController ) { }

  ngOnInit() {
 

  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

  async recordVoice() {
    this.isVisibleRecording =true;
      this.increaseProgress().then(any=>{
        console.log("finalizar de grabar");
        const { VoiceRecorder } = Plugins;
      });
   
    
   // VoiceRecorder.hasAudioRecordingPermission.then((result: GenericResponse) => console.log(result.value))

}


}
