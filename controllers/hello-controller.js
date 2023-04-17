const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Hello, this is Project!')
    })
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
}
export default HelloController;