const middleware = {}

middleware['chat'] = require('..\\middleware\\chat.js');
middleware['chat'] = middleware['chat'].default || middleware['chat']

export default middleware
