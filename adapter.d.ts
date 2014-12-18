// Type definitions for adapter.js
// Project: https://github.com/GoogleChrome/webrtc/
// Definitions by: esix <https://github.com/esix/>
// Definitions: https://github.com/rcslabs/webrtc-adapter

/// <reference path="mediacapture-streams.d.ts" />
/// <reference path="webrtc.d.ts" />


declare function getUserMedia(constraints: MediaStreamConstraints,
                              successCallback: NavigatorUserMediaSuccessCallback,
                              errorCallback: NavigatorUserMediaErrorCallback);


declare function attachMediaStream(element: HTMLMediaElement, stream: MediaStream);


declare function reattachMediaStream(to: HTMLMediaElement, from);


// 'firefox' | 'chrome'
declare var webrtcDetectedBrowser: string;


declare var webrtcDetectedVersion: string;


interface Navigator {
  getUserMedia(constraints: MediaStreamConstraints,
               successCallback: NavigatorUserMediaSuccessCallback,
               errorCallback: NavigatorUserMediaErrorCallback) : void;
}
