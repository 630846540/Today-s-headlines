let baseUrl = '/wxf'


process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'http://101.200.63.140'

export default baseUrl