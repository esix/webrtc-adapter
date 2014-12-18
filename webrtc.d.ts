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

declare enum RTCSignalingState {
  "stable",
  "have-local-offer",
  "have-remote-offer",
  "have-local-pranswer",
  "have-remote-pranswer",
  "closed"
}


declare enum RTCIceGatheringState {
  "new",
  "gathering",
  "complete"
}


declare enum RTCIceConnectionState {
  "new",
  "checking",
  "connected",
  "completed",
  "failed",
  "disconnected",
  "closed"
}


interface MediaStreamEventInit {
  stream: MediaStream;
}

interface MediaStreamEvent extends Event {
  constructor(type: string, eventInitDict: MediaStreamEventInit);
  stream: MediaStream;
}


interface VoidFunction {
  (): void;
}


interface RTCSessionDescriptionInit {
  type: string; //RTCSdpType;
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

interface RTCPeerConnectionErrorCallback {
  (error: Error): void;
}


interface RTCIceServer {
  urls: any; // (DOMString or sequence<DOMString>)
  username?: string;
  credential?: string;
}


interface RTCConfiguration {
  iceServers: RTCIceServer[];
}


interface MediaConstraints {
  mandatory?: any;
  optional?: any;
}


interface RTCIceCandidateInit {
  candidate?: string;
  sdpMid?: string;
  sdpMLineIndex?: number;
}

declare class RTCIceCandidate {
  constructor(candidateInitDict: RTCIceCandidateInit);
  candidate     : string;
  sdpMid        : string;
  sdpMLineIndex : number;
}


declare class RTCPeerConnection {
  constructor(configuration: RTCConfiguration,
              constraints?: MediaConstraints);

  createOffer(successCallback: RTCSessionDescriptionCallback,
              failureCallback?: RTCPeerConnectionErrorCallback,
              constraints?: MediaConstraints): void;
  createAnswer(successCallback: RTCSessionDescriptionCallback,
               failureCallback?: RTCPeerConnectionErrorCallback,
               constraints?: MediaConstraints): void;
  setLocalDescription(description: RTCSessionDescription,
                      successCallback?: VoidFunction,
                      failureCallback?: RTCPeerConnectionErrorCallback): void;
  localDescription: RTCSessionDescription;
  setRemoteDescription(description: RTCSessionDescription,
                       successCallback?: VoidFunction,
                       failureCallback?: RTCPeerConnectionErrorCallback): void;
  remoteDescription: RTCSessionDescription;
  signalingState: RTCSignalingState;
  updateIce(configuration?: RTCConfiguration,
            constraints?: MediaConstraints): void;
  addIceCandidate(candidate: RTCIceCandidate): void;
  iceGatheringState: RTCIceGatheringState;
  iceConnectionState: string;       //RTCIceConnectionState;
  getLocalStreams(): MediaStream[];
  getRemoteStreams(): MediaStream[];
  getStreamById(streamId: string): MediaStream;
  addStream(stream: MediaStream, constraints?: MediaConstraints): void;
  removeStream(stream: MediaStream): void;
  close(): void;
  onnegotiationneeded: (event: Event) => void;
  onicecandidate: (event: Event) => void;
  onsignalingstatechange: (event: Event) => void;
  onaddstream: (event: MediaStreamEvent) => void;
  onremovestream: (event: MediaStreamEvent) => void;
  oniceconnectionstatechange: (event: Event) => void;
}
