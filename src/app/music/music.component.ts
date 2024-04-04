import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Song {
  title: string;
  url: string;
  artist: string;
  image: string;
}
const audioElement: HTMLAudioElement | any = document.querySelector('audio');
@Component({
  standalone: true,
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  imports: [NgFor, NgIf],
})

export class musicComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef | any
  currentTrackIndex: number = 0;
  nextsong1: any;
  currentTime: number = 0;
  duration: number = 0;
  progress: number = 0;
  isPlaying: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime = this.audioPlayer.nativeElement.currentTime;
      this.progress = (this.currentTime / this.duration) * 100;
    });

    this.audioPlayer.nativeElement.addEventListener('loadedmetadata', () => {
      this.duration = this.audioPlayer.nativeElement.duration;
    });
  }

  songs: Song[] = [
    {
      title: 'We Do not Talk Anymore',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      artist: 'Charlie Puth',
      image: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
    },
    {
      title: 'Let Her Go',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
      artist: 'Chris Vallejo',
      image: 'https://media.istockphoto.com/id/1496108471/de/foto/die-gipfel-des-matterhorns-spiegeln-sich-im-see.jpg?s=1024x1024&w=is&k=20&c=lBWaDm3LsLJHSA2INbLELxnQud5VwZpc3_Rr--Mqwyw='
    },
    {
      title: 'Roar',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
      artist: 'Katy Perry',
      image: 'https://plus.unsplash.com/premium_photo-1680553489384-8e3230dd1073?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8'
    }
  ];
  currentSongIndex: number = 0;
  currentSong: Song = this.songs[this.currentSongIndex];
  isnotplaying: boolean = false;


  restart(): void {
    const audioElement: HTMLAudioElement | any = document.querySelector('audio');
    audioElement.currentTime = 0;
  }
  seek(event: MouseEvent) {
    const progressBar = event.target as HTMLDivElement;
    const progressWidth = progressBar.offsetWidth;
    const clickX = event.clientX - progressBar.offsetLeft;
    const seekTime = (clickX / progressWidth) * this.duration;
    this.audioPlayer.nativeElement.currentTime = seekTime;
  }

  formatTime(seconds: number): string {
    const pad = (num: number) => {
      return num < 10 ? '0' + num : num;
    };
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return pad(minutes) + ':' + pad(remainingSeconds);
  }

  nextSong(): void {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex];
    this.isPlaying = true;
    const audioElement: HTMLAudioElement | any = document.querySelector('audio');
    audioElement.autoplay = true;
    audioElement.play()
  }

  previousSong(): void {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex];
    this.isPlaying = true;
    const audioElement: HTMLAudioElement | any = document.querySelector('audio');
    audioElement.autoplay = true;
    audioElement.play()
  }
  updateProgressBar(): void {
    const audioElement: HTMLAudioElement | any = document.querySelector('audio');
    this.progress = (audioElement.currentTime / audioElement.duration) * 100;
  }

  playPause(): void {
    this.isPlaying = !this.isPlaying;
    const audioElement: HTMLAudioElement | any = document.querySelector('audio');
    if (this.isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

}



