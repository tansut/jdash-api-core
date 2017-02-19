import { Query, QueryResult, DashboardCreateModel, DashboardModel, Metadata, CreateResult } from 'jdash-core';

export interface ISearchDashboard {
    appid?: string | Array<string>;
    user?: string | Array<string>;
    shareWith?: string | Array<string>;
}

export interface IDBProvider {
    getDashboard?(appid: string, id: string): Promise<DashboardModel>;
    searchDashboards(search: ISearchDashboard, query?: Query): Promise<QueryResult<DashboardModel>>;
    createDashboard(appid: string, model: DashboardCreateModel): Promise<CreateResult>;
}