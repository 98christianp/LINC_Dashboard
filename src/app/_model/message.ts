export class Message {
  constructor(
    public title: string,
    public sent_timestamp: string,
    public expiration_date: string,
    public message_type: string,
    public content: string
  ){}

}
