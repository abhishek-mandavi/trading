export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Welcome to Stock-trade all</title>
    ...
</head>
<body>
    ...
    <img src="https://ik.imagekit.io/a6fkjou7d/logo.png?updatedAt=1756378431634" alt="Stock-trade all Logo">
    ...
    <p style="text-align: center;">
        Stock-trade all HQ, 200 Market Street, San Francisco, CA 94105<br>
        <a href="#">Unsubscribe</a> | 
        <a href="https://stock-market-dev.vercel.app/">Visit Stock-trade all</a><br>
        © 2025 Stock-trade all
    </p>
</body>
</html>`;
export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Market News Summary Today</title>
</head>
<body>
    ...
    <img alt="Stock-trade all Logo">
    ...
    <p>
        You're receiving this because you subscribed to Stock-trade all news updates.
    </p>
    <p>
        <a href="#">Unsubscribe</a> |
        <a href="https://stock-trade.app">Visit Stock-trade all</a>
    </p>
    <p>© 2025 Stock-trade all</p>
</body>
</html>`;

export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Price Alert: {{symbol}} Hit Upper Target</title>
</head>
<body>
    ...
    <img alt="Stock-trade all Logo">
    ...
    <p>You're receiving this because you subscribed to Stock-trade all news updates.</p>
    <p>
        <a href="#">Unsubscribe</a> |
        <a href="https://stock-trade.app">Visit Stock-trade all</a>
    </p>
    <p>© 2025 Stock-trade all</p>
</body>
</html>`;

export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Price Alert: {{symbol}} Hit Lower Target</title>
</head>
<body>
    ...
    <img alt="Stock-trade all Logo">
    ...
    <p>You're receiving this because you subscribed to Stock-trade all news updates.</p>
    <p>
        <a href="#">Unsubscribe</a> |
        <a href="https://stock-trade.app">Visit Stock-trade all</a>
    </p>
    <p>© 2025 Stock-trade all</p>
</body>
</html>`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Volume Alert: {{symbol}}</title>
</head>
<body>
    ...
    <img alt="Stock-trade all Logo">
    ...
    <p>You're receiving this because you subscribed to Stock-trade all news updates.</p>
    <p>
        <a href="#">Unsubscribe</a> |
        <a href="https://stock-trade.app">Visit Stock-trade all</a>
    </p>
    <p>© 2025 Stock-trade all</p>
</body>
</html>`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>We Miss You! Your Market Insights Await</title>
</head>
<body>
    ...
    <img alt="Stock-trade all Logo">
    ...
    <p>We noticed you haven't visited Stock-trade all in a while.</p>
    ...
    <a href="{{dashboardUrl}}">Visit Stock-trade all</a>
    <p>© 2025 Stock-trade all</p>
</body>
</html>`;




