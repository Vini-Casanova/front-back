const LogMiddleware = (req, res, next) => {
    const originalUrl = req.url;
    console.log(`[${new Date().toISOString()}] REQUEST ${req.method} ${req.url}`);

    const originalSend = res.send;

    res.send = function (body) {
        console.log(`[${new Date().toISOString()}] RESPONSE ${req.method} ${originalUrl} ${res.statusCode}`);
        originalSend.call(this, body);
    };

    next();
}

export default LogMiddleware;