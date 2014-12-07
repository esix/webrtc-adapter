// Type definitions for WebRTC 1.0: Real-time Communication Between Browsers
// Project: http://www.w3.org/TR/webrtc/
// Definitions by: esix <https://github.com/esix/>
// Definitions: https://github.com/rcslabs/webrtc-adapter


/// <reference path="mediacapture-streams.d.ts" />


declare enum RTCSdpType {
  "offer",
  "pranswer",
  "answer"
}


interface RTCSessionDescriptionInit {
  type: RTCSdpType ;
  sdp: string;
}


declare class RTCSessionDescription {
  constructor(descriptionInitDict: RTCSessionDescriptionInit);
  type: RTCSdpType;
  sdp: string;
  //serializer = {attribute};
}


interface RTCSessionDescriptionCallback {
  (sdp: RTCSessionDescription): void;
}


interface RTCIceServer {
  urls: any; // (DOMString or sequence<DOMString>)
  username?: string;
  credential?: string;
}


interface RTCConfiguration {
  iceServers: RTCIceServer[];
}


declare class RTCPeerConnection {
  constructor(configuration: RTCConfiguration,
              constraints?: MediaConstraints);

  createOffer(successCallback: RTCSessionDescriptionCallback,
              failureCallback?: RTCPeerConnectionErrorCallback,
              constraints?: MediaConstraints): void;
  createAnswer(successCallback: RTCSessionDescriptionCallback,
               failureCallback?: RTCPeerConnectionErrorCallback,
               constraints?: RTCMediaConstraints): void;
  setLocalDescription(description: RTCSessionDescription,
                      successCallback?: RTCVoidCallback,
                      failureCallback?: RTCPeerConnectionErrorCallback): void;
  localDescription: RTCSessionDescription;
  setRemoteDescription(description: RTCSessionDescription,
                       successCallback?: RTCVoidCallback,
                       failureCallback?: RTCPeerConnectionErrorCallback): void;
  remoteDescription: RTCSessionDescription;
  signalingState: RTCSignalingState;
  updateIce(configuration?: RTCConfiguration,
            constraints?: MediaConstraints): void;
  addIceCandidate(candidate: RTCIceCandidate): void;
  iceGatheringState: RTCIceGatheringState;
  iceConnectionState: RTCIceConnectionState;
  getLocalStreams(): MediaStream[];
  getRemoteStreams(): MediaStream[];
  getStreamById(streamId: string): MediaStream;
  addStream(stream: MediaStream, constraints?: MediaConstraints): void;
  removeStream(stream: MediaStream): void;
  close(): void;
  onnegotiationneeded: (event: Event) => void;
  onicecandidate: (event: Event) => void;
  onsignalingstatechange: (event: Event) => void;
  onaddstream: (event: Event) => void;
  onremovestream: (event: Event) => void;
  oniceconnectionstatechange: (event: Event) => void;
}
