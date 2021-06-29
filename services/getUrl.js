export function getUrl() {
    if (process.env.NODE_ENV == 'development') {
        return 'http://localhost:1337';
    } else {
        return 'https://pilviskiai-adminarea.herokuapp.com';
    }
}