
export class Quotes {
  upVotes: number;
  downVotes: number;
  upVote: Function;
  downVote: Function;
  average: Function;
    constructor(public id: number, public Quote: string, public AuthorName, public Username, public time: Date){
      this.upVotes=0;
      this.downVotes=0;
      this.upVote=function(){
        this.upVotes += 1;
      };
      this.downVote = function(){
        this.downVotes += 1;
      };
      this.average = function () {
        return this.upVotes - this.downVotes
      }
    }
  }
