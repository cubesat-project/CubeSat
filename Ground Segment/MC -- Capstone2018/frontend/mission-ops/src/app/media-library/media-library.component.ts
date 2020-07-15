import { Component, OnInit } from '@angular/core';

import { PanoramicMediaService } from 'src/app/services/panoramic-media/panoramic-media.service';
import { PagedList } from 'src/classes/paged-list';
import { PanoramicMedia } from 'src/classes/panoramic-media';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {

  public mediaList: PagedList<PanoramicMedia>;
  private loading: Array<boolean>;

  constructor(private media: PanoramicMediaService) { }

  ngOnInit() {
    this.media.getMediaList().subscribe((data) => {
      this.mediaList = data;
      this.loading = new Array(this.mediaList.items.length).fill(true);
    });
  }
}
