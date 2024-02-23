export class Blog{
  id? : string;
  title? : string;
  date? : string;
  content? : string;
  image? : string;
  comments? : Comment[];
  shortDes? : string;

}

export class Comment {

 id?: number ;
 username? :string;
 userId? : string;
 date? : string;
 comment?: string;

}