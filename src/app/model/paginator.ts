export class Paginator {
    pageSize: number;
    page: number;
    count: number;

    constructor(pageSize: number, page: number, count: number){
        this.pageSize = pageSize;
        this.page = page;
        this.count = count;
   }
   
}