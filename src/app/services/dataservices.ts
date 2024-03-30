import { Injectable } from '@angular/core';

interface Song {
  title: string;
  url: string;
  artist: string;
  image: string;
}

export class dataservice {

  Songs: Song[] = [
    {
      title: 'Song 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      artist: 'Artist 1',
      image: 'https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg'
    },
    {
      title: 'Song 2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
      artist: 'Artist 3',
      image: 'https://media.istockphoto.com/id/1496108471/de/foto/die-gipfel-des-matterhorns-spiegeln-sich-im-see.jpg?s=1024x1024&w=is&k=20&c=lBWaDm3LsLJHSA2INbLELxnQud5VwZpc3_Rr--Mqwyw='
    },
    {
      title: 'Song 3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
      artist: 'Artist 2',
      image: 'https://plus.unsplash.com/premium_photo-1680553489384-8e3230dd1073?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8'
    }
  ];
}