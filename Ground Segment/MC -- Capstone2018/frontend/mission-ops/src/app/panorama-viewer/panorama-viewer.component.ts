import { Component, OnInit, ElementRef, ViewChild, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PanoViewer } from '@egjs/view360';

import { PanoramicMedia } from 'src/classes/panoramic-media';

@Component({
  selector: 'app-panorama-viewer',
  templateUrl: './panorama-viewer.component.html',
  styleUrls: ['./panorama-viewer.component.scss']
})
export class PanoramaViewerComponent implements OnInit, OnDestroy {

  @ViewChild('viewer')
  private viewerElement: ElementRef;

  private _inputData: PanoramicMedia;
  @Input()
  private get inputData() {
    return this._inputData;
  }
  private set inputData(val) {
    if (!val && !this._inputData) {
      // input was already undefined/null and is being set to undefined/null
      // Do nothing
    } else if (!val && this._inputData) {
      // input existed, but is being set to undefined/null
      // Destroy viewer
      this.viewer.destroy();
    } else if (val && !this._inputData) {
      // input was undefined/null, but we're getting new data
      // Create viewer
      this.createViewer(val);
    } else {
      // input existed and we're setting it to a new value
      // Change viewer image, recreate if switching type
      if (val.type === this._inputData.type) {
        // Type matches, so just change content
        this.loading = true;
        if (val.type === 'image') {
          this.viewer.setImage(val.src);
        } else {
          this.viewer.setVideo(val.src);
        }
      } else {
        // Type does not match, so destroy and recreate the viewer
        this.viewer.destroy();
        this.createViewer(val);
      }
    }

    if (val && val.type === 'video') {
      // New media type is video, so start it playing once it's done loading
      this.viewer.once('ready', (eventData) => {
        this.viewer.getVideo().loop = true;
        this.viewer.getVideo().play();
      });
    }

    this._inputData = val;
  }

  private viewer: PanoViewer;
  private viewerConfig: any = {
    // Put all config info about image format and etc in here
  };

  public loading: boolean = false;

  @Output()
  public ready: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.viewer) {
      if (this.inputData && this.inputData.type === 'video') {
        // Pause the video if it exists, since destroying it doesn't stop it for some reason.
        this.viewer.getVideo().pause();
      }
      this.viewer.destroy();
    }
  }

  private buildConfig(inputData: PanoramicMedia): any {
    let viewerConfig: any = {};

    // Builds a config object from the master config and input data and puts it into viewerConfig
    if (inputData.type === 'image') {
      Object.assign(viewerConfig, this.viewerConfig, {
        image: inputData.src
      });
    } else {
      Object.assign(viewerConfig, this.viewerConfig, {
        video: inputData.src
      });
    }

    return viewerConfig;
  }

  private createViewer(inputData: PanoramicMedia) {
    this.loading = true;
    this.viewer = new PanoViewer(this.viewerElement.nativeElement as HTMLElement, this.buildConfig(inputData));

    this.viewer.on('ready', (eventData) => {
      this.loading = false;
      this.ready.emit();
    });
  }
}
