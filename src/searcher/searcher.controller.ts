import {Controller} from '@nestjs/common';

import {SearcherService} from './searcher.service';

import {
  SearcherController as SearcherControllerInterface,
  HENKENCLUB_SEARCH_V1_PACKAGE_NAME,
  SearcherControllerMethods,
  SearchAuthorRequest,
  FilteredSearchResponse,
  SearchAllRequest,
  SearchAllResponse,
  SearchBookRequest,
  SearchBookSeriesRequest,
} from '~/protogen/searcher';

@SearcherControllerMethods()
@Controller(HENKENCLUB_SEARCH_V1_PACKAGE_NAME)
export class SearcherController implements SearcherControllerInterface {
  constructor(private readonly searcher: SearcherService) {}

  async searchAll(request: SearchAllRequest): Promise<SearchAllResponse> {
    return {results: []};
  }

  async searchAuthor(
    request: SearchAuthorRequest,
  ): Promise<FilteredSearchResponse> {
    return {contentIds: []};
  }

  async searchBook(
    request: SearchBookRequest,
  ): Promise<FilteredSearchResponse> {
    return {contentIds: []};
  }

  async searchBookSeries(
    request: SearchBookSeriesRequest,
  ): Promise<FilteredSearchResponse> {
    return {contentIds: []};
  }
}
