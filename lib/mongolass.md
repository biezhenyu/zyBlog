### Mongoose

#### 优点
- 封装了数据库的操作，给人的感觉是同步的，其实内部是异步的。如 mongoose 与 MongoDB 建立连接：
```javascript
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const BlogModel = mongoose.model('Blog', { title: String, content: String })
BlogModel.find()
```
- 支持 Promise。这个也无需多说，Promise 是未来趋势，可结合 co 使用，也可结合 async/await 使用。
- Mongolass 保持了与 mongodb 一样的 api，又借鉴了许多 Mongoose 的优点，同时又保持了精简。