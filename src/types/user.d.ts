declare interface AuthContextType {
  user: any;
  token?: string;
  signin: (user: any) => Promise<any>;
  signout: () => void;
}