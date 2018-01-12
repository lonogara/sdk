# util for api

### tumblr
```js
import {
  tumblrAvatar,
  tumblrInfo,
  tumblrPosts,
  TumblrPosts,
  TumblrPostsRandom,
  TumblrPostsV1,
  TumblrPostsRandomV1
} from 'lonogara-tool/api'

tumblrAvatar(account[, size])

tumblrInfo(account[, { api_key, proxy, init }])

tumblrPosts(account[, { query, proxy, init }])

TumblrPosts(account[, {
  query,
  limit: 20,
  proxy,
  init
}])

TumblrPostsV1(account[, {
  query,
  limit: 50,
  timeout: 5000
}])
```