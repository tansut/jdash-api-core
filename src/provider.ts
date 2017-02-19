import { Query, QueryResult, DashboardCreateModel, DashboardUpdateModel, DashboardModel, Metadata, CreateResult } from 'jdash-core';

export interface ISearchDashboard {
    appid?: string | Array<string>;
    user?: string | Array<string>;
    shareWith?: string | Array<string>;
}

export interface IDBProvider {
    getDashboard?(appid: string, id: string): Promise<DashboardModel>;
    searchDashboards(search: ISearchDashboard, query?: Query): Promise<QueryResult<DashboardModel>>;
    createDashboard(appid: string, model: DashboardCreateModel): Promise<CreateResult>;
    deleteDashboard(appid: string, id: string): Promise<any>;
    updateDashboard(appid: string, id: string, updateValues: DashboardUpdateModel): Promise<any>;
}