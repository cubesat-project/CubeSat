import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PanoramicMediaService } from 'src/app/services/panoramic-media/panoramic-media.service';
import { PanoramicMedia } from 'src/classes/panoramic-media';

@Component({
  selector: 'app-media-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {

  private media: PanoramicMedia;
  public errorMsg: string;

  constructor(private route: ActivatedRoute, private mediaService: PanoramicMediaService) { 
    const mediaId = this.route.snapshot.queryParamMap.get('id');
    if (mediaId) {
      this.mediaService.getMedia(Number(mediaId)).subscribe((val) => {
        if (val) {
          this.media = val;
        } else {
          this.errorMsg = `No payload data with id ${mediaId} found`;
        }
      }, (err) => {
        console.log(err);
        this.errorMsg = 'Something went wrong';
      });
    } else {
      this.errorMsg = 'No payload data id provided';
    }
  }

  ngOnInit() {
  }

}
