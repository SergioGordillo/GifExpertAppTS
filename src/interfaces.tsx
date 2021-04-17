export interface InformationProps {
  setInformation: (
    information: string[] | ((information: string[]) => string[])
  ) => void;
}
