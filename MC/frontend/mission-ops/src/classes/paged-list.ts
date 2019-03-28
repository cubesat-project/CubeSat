export class PagedList<T> {
    public items: Array<T>;
    public page: number;
    public total: number;
    
    constructor(params: PagedList<T> = {} as PagedList<T>) {
        let {
            items = [],
            page = 0,
            total = 0
        } = params;

        this.items = items;
        this.page = page;
        this.total = total;
    }
}