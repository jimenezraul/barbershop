interface HeroProps {
  // optional property
  title?: string;
  subTitle?: string;
  span?: string;
  desc?: string;
  button?: string;
}

interface NavProps {
  isOpen: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AutoHideProps {
  ref: React.RefObject<HTMLDivElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
