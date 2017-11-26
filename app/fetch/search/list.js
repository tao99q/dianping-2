import {get} from '../get';

export function getSearchData(page, city, category, keyword) {
    const result = get('/api/search/' + page + '/' + encodeURIComponent(city) + '/' + category + '/' + keyword);
    return result;
}