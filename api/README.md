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

tumblrInfo(account, api_key[, proxy])

tumblrPosts(account, api_key[, query, proxy])

TumblrPosts({
  account,
  api_key,
  query,
  limit: 20,
  proxy
})

TumblrPostsV1({
  account,
  query,
  limit: 50,
  timeout: 5000
})
```