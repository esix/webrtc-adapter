// Type definitions for adapter.js
// Project: https://github.com/GoogleChrome/webrtc/
// Definitions by: esix <https://github.com/esix/>
// Definitions: https://github.com/rcslabs/webrtc-adapter

/// <reference path="mediacapture-streams.d.ts" />
/// <reference path="webrtc.d.ts" />

//
// adapter.js defines RTCPeerConnection, RTCSessionDescription, RTCIceCandidate
//  which already defined in webrtc.d.ts
//


declare function getUserMedia(constraints: MediaStreamConstraints,
                              successCallback: NavigatorUserMediaSuccessCallback,
                              errorCallback: NavigatorUserMediaErrorCallback);


declare function attachMediaStream();


declare function reattachMediaStream();


declare var webrtcDetectedBrowser: string;


declare var webrtcDetectedVersion: string;


interface Navigator {
  getUserMedia(constraints: MediaStreamConstraints,
               successCallback: (stream: any) => void,
               errorCallback: (error: Error) => void) : void;
}
