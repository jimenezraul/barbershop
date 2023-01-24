interface HeroProps {
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

interface RegisterFormState {
  given_name: string;
  family_name: string;
  email: string;
  password: string;
  confirm_password: string;
  error: {
    given_name: string;
    family_name: string;
    email: string;
    password: string;
    confirm_password: string;
  };
}

interface LoginFormState {
  email: string;
  password: string;
}

interface RegisterUseState {
  success: boolean;
  message: string;
  subMessage: string;
}