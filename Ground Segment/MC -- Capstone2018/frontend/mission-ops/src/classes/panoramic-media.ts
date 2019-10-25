export class PanoramicMedia {
    src: string | HTMLImageElement | HTMLVideoElement;
    previewSrc: string | HTMLImageElement;
    type: 'image' | 'video';
    name: string;
    tags: string[];
    id: number;
}
