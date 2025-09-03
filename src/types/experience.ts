export type Experience = {
  company: string;
  title: string;
  duration: {
    start: Date;
    end?: Date;
  };
  logo: string;
  description: string[];
}
