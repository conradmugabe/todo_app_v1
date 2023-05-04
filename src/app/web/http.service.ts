import { AxiosRequestConfig } from "axios";

import apiClientService from "./api.client.service";

class HttpService<TData, TInput> {
  constructor(private endpoint: string) {}

  create = (data: TInput) =>
    apiClientService
      .post<TData>(this.endpoint, data)
      .then((response) => response.data);

  delete = (id: number | string) =>
    apiClientService
      .delete<void>(this.endpoint + id)
      .then((response) => response.data);

  getMany = (config?: AxiosRequestConfig) =>
    apiClientService
      .get<TData[]>(this.endpoint, config)
      .then((response) => response.data);

  getOne = (id: number | string) =>
    apiClientService
      .get<TData>(this.endpoint + id)
      .then((response) => response.data);

  updateOne = (id: number | string, data: TData) =>
    apiClientService
      .put<TData>(this.endpoint + id, data)
      .then((response) => response.data);
}

export default <TData, TInput>(endpoint: string) =>
  new HttpService<TData, TInput>(endpoint);
