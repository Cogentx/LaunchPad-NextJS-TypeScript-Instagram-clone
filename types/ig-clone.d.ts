import { FieldValue, Timestamp } from 'firebase/firestore';

interface IPost {
  id?: string;
  name?: string;
  username?: string;
  profileImg?: string;
  caption?: string;
  timestamp?: FieldValue<Timestamp>;
  postImg?: string;
}

interface IComment {
  comment?: string;
  username?: string;
  profileImg?: string;
  timestamp?: FieldValue<Timestamp>;
}

export { IPost, IComment };
