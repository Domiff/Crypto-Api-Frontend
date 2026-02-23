<template>
    <div class="home">
        <h1>Crypto Tracker</h1>

        <nav class="home-links">
            <RouterLink class="card btc" to="/bitcoin">
                <span class="icon">₿</span>
                <h2>Bitcoin</h2>
            </RouterLink>

            <RouterLink class="card eth" to="/ethereum">
                <span class="icon">◆</span>
                <h2>Ethereum</h2>
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    .home {
        text-align: center;
        margin-top: 80px;
    }

    .home h1 {
        font-size: 48px;
        margin-bottom: 50px;
        letter-spacing: 1px;
    }

    .home-links {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .icon {
        font-size: 34px;
    }

    .card {
        display: flex;
        align-items: center;
        gap: 18px;

        width: 240px;
        padding: 22px;

        text-decoration: none;
        color: white;

        background: #111827;
        border: 1px solid #1f2937;
        border-radius: 16px;

        transition: 0.25s;

        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    .card:hover {
        transform: translateY(-6px) scale(1.03);
    }

    .card h2 {
        margin: 0;
        font-size: 20px;
    }

    .card p {
        margin: 0;
        font-size: 14px;
        opacity: 0.7;
    }

    .btc:hover {
        border-color: #f7931a;
        box-shadow: 0 0 25px rgba(247, 147, 26, 0.35);
    }

    .eth:hover {
        border-color: #627eea;
        box-shadow: 0 0 25px rgba(98, 126, 234, 0.35);
    }
</style>
