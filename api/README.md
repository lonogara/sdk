# util for api

### tumblr
```js
import { tumblr } from 'lonogara-tool/api'

tumblr.avatar(account[, size])

tumblr.info(account, api_key)

tumblr.posts(account, api_key[, query])

tumblr.Posts({
  account,
  api_key,
  query,
  limit: 20
})

tumblr.PostsV1({
  account,
  query,
  limit: 50,
  timeout: 5000
})
```