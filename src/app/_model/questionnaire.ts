export class Questionnaire {
    constructor(
        public id: number,
        public name: string,
        public desc: string,
        public link: string,
        public rules: any[],
        public Responses: number,
        public SentOut: number
    ){}
}
