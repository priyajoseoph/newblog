export class userprofile{
    userName: string | null | '' = '';
  email: string | null | '' = '';
  password: string | null | '' = '';
  mobile: string | null | '' = '';
  name: string | null | '' = '';
}

export class blogprofile{

   blogTitle: string | null | '' = '';
blogContent: string | null | '' = '';
blogImage: string | null | '' = '';
category: string | null | '' = '';
activeStatus:number | null | '' = '';
blogId:number | null | '' = '';
data: any;
createdAt:any;

}

export class commentdata{

  blogId: number | null | '' = '';
commentContent: string | null | '' = '';
commentAs: string | null | '' = '';
activeStatus:number | null | '' = '';
}