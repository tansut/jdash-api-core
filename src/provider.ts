import { Query, QueryResult, DashboardCreateModel, DashboardUpdateModel, DashletCreateModel, DashletModel, DashletUpdateModel, DashboardModel, CreateResult } from 'jdash-core';

export interface ISearchDashboard {
    appid?: string | Array<string>;
    user?: string | Array<string>;
    shareWith?: string | Array<string>;
}

export interface ISearchDashlet {
    user?: string | Array<string>;
    dashboardId?: string;
}

export interface IDBProvider {
    getDashboard?(appid: string, id: string): Promise<DashboardModel>;
    searchDashboards(search: ISearchDashboard, query?: Query): Promise<QueryResult<DashboardModel>>;
    createDashboard(appid: string, model: DashboardCreateModel): Promise<CreateResult>;
    deleteDashboard(appid: string, id: string): Promise<any>;
    updateDashboard(appid: string, id: string, updateValues: DashboardUpdateModel): Promise<any>;

    createDashlet(model: DashletCreateModel): Promise<CreateResult>;
    searchDashlets(search: ISearchDashlet): Promise<Array<DashletModel>>;
    deleteDashlet(appid: string, id: string): Promise<any>;
    updateDashlet(id: string, updateValues: DashletUpdateModel): Promise<any>;

}