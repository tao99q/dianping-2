import {get} from '../get';

export function getOrderList(username) {
    const result = get('/api/orderlist/' + encodeURIComponent(username));
    return result;
};