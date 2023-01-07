"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const money = (0, _express.default)();
money.use(_express.default.json());
money.get('/', (req, res) => {
  res.json({
    message: 'Server is running'
  });
});
const PORT = 4000;
money.listen(PORT, () => {
  console.log('Server is running');
});