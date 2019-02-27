/**
 *
 * @type {{comment: {url: string, method: string}}}
 */

const userApi = {

  /**
   * 最新发布列表信息
   */
  shareAt:{
    url:'/asimov/users/slug/ad73e614982f/public_notes?page=1&count=10&order_by=shared_at',
    method: 'get'
  },
  /**
   * 最新评论列表信息
   */
  comment:{
    url:'/asimov/users/slug/ad73e614982f/public_notes?page=1&count=10&order_by=commented_at',
    method:'get'
  },
  /**
   * 最新热门列表信息
   */
  top:{
    url:'/asimov/users/slug/ad73e614982f/public_notes?page=1&count=10&order_by=top',
    method:'get'
  }
};

export  default  userApi;
