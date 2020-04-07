import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-a-web-app';
  hasID: boolean = false;
  @ViewChild('myvideo') myVideo: any;
  
  peer;
  anotherid;
  mypeerid;

  constructor() {}


  ngOnInit() {
    this.peer = new Peer({key: 'lwjd5qra8257b9'});
    setTimeout(() => {
      console.log("data peer connection id", this.peer.id);
    }, 3000);

    this.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });
    
    //  this.peer.on('connection', (conn) => {
    //     conn.on('data', (data) => {
    //     // Will print 'hi!'
    //     console.log("data peer on", data);
    //   });
    // });

    // let video = this.myVideo.nativeElement;
    // var n = <any>navigator;
    
    // n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    // this.peer.on('call', function(call) {
      
    //   n.getUserMedia({video: true, audio: true}, function(stream) {
    //     call.answer(stream);
    //     call.on('stream', function(remotestream){
    //       video.src = URL.createObjectURL(remotestream);
    //       video.play();
    //     })
    //   }, function(err) {
    //     console.log('Failed to get stream', err);
    //   })
    // })

  }

  connect(){
    var conn = this.peer.connect(this.anotherid);
    conn.on('open', function(){
        conn.send('Message from that id');
    });
  }

  videoconnect(){
    let video = this.myVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherid;
    
    // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
    var n = <any>navigator;
    
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    })

  }
}
