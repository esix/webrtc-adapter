// Type definitions for Media Capture and Streams
// Project: http://www.w3.org/TR/mediacapture-streams/
// Definitions by: esix <https://github.com/esix/>
// Definitions: https://github.com/rcslabs/webrtc-adapter


interface SourceInfo {
  sourceId: string;
  kind: string;
  label: string;
}


declare enum VideoFacingModeEnum {
  "user",
  "environment",
  "left",
  "right"
}


interface CapabilityRange {
  max: any;
  min: any;
  supported: boolean;
}


interface AllCapabilities {

}


interface AllVideoCapabilities extends AllCapabilities {
  sourceType?: string[];
  sourceId?: string[];
  width?: CapabilityRange;
  height?: CapabilityRange;
  frameRate?: CapabilityRange;
  aspectRatio?: CapabilityRange;
  facingMode?: string[];
}


interface AllAudioCapabilities {
  volume: CapabilityRange;
}


declare enum SourceTypeEnum {
      "none",
      "camera",
      "microphone"
}


interface MediaSourceStates {
  sourceType: SourceTypeEnum;
  sourceId: string;
  width?: number;
  height?: number;
  frameRate?: number;
  aspectRatio?: number;
  facingMode?: VideoFacingModeEnum;
  volume?: number;
}


declare enum MediaStreamTrackState {
  "new",
  "live",
  "ended"
}


interface MediaTrackConstraints {
  mandatory?: any;
  _optional?: any;
}

interface MediaStreamConstraints {
  video: any; // boolean | MediaTrackConstraints;
  audio: any; // boolean | MediaTrackConstraints;
}


interface MediaStreamTrack extends EventTarget {
  kind: string;
  id: string;
  label: string;
  enabled: boolean;
  muted: boolean;
  onmute: (event: Event) => void;
  onunmute: (event: Event) => void;
  _readyState: boolean;
  remote: boolean;
  readystate: MediaStreamTrackState;
  onstarted: (event: Event) => void;
  onended: (event: Event) => void;
  getSourceInfos(): SourceInfo[];
  constraints(): MediaTrackConstraints;
  states(): MediaSourceStates;
  capabilities(): AllCapabilities;
  applyConstraints(constraints: MediaTrackConstraints): void;
  onoverconstrained: (event: Event) => void;
  clone(): MediaStreamTrack;
  stop(): void;
}


declare class MediaStream {
  constructor();
  constructor(stream: MediaStream);
  constructor(tracks: MediaStreamTrack[]);

  id: string;
  getAudioTracks(): MediaStreamTrack[];
  getVideoTracks(): MediaStreamTrack[];
  getTrackById(trackId: string): MediaStreamTrack;
  addTrack(track: MediaStreamTrack): void;
  removeTrack(track: MediaStreamTrack): void;
  ended: boolean;
  onended: (event: Event) => void;
  onaddtrack: (event: Event) => void;
  onremovetrack: (event: Event) => void;
}


interface NavigatorUserMediaError extends Error {
  constraintName: string;
}


interface NavigatorUserMediaErrorCallback {
  (error: NavigatorUserMediaError): void;
}


interface NavigatorUserMediaSuccessCallback {
  (stream: MediaStream): void;
}


interface Navigator {
  getUserMedia(constraints: MediaStreamConstraints,
               successCallback: NavigatorUserMediaSuccessCallback,
               errorCallback: NavigatorUserMediaErrorCallback): void;
}
