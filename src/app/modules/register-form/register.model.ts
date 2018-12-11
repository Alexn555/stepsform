
export interface FileDocument {
  id: number;
  filename: string;
  size: number;
  type: string;
  added: number;
  enabled: boolean;
}

export interface NavButtonSettings {
  prevVisible: boolean;
  prevDisabled: boolean;
  nextVisible: boolean;
  nextDisabled: boolean;
  currentStepId: number;
}
